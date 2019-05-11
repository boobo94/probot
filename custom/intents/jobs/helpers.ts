import { HandlerInput } from "ask-sdk";
import { Errors } from "../../lib/types";
import { jobsControllerAPI, JobType } from "../../lib/jobsControllerAPI";
import { CreateError, GetSessionAttributes } from "../../lib/helpers";


export async function GetJob(handlerInput: HandlerInput): Promise<JobType> {
    let sessionAttributes = GetSessionAttributes(handlerInput)

    const jobs = await jobsControllerAPI.search(sessionAttributes.job.position, sessionAttributes.job.location);

    if (!jobs.length) {
        throw CreateError('', Errors.FindingJobs)
    }

    // filter to get all jobs not listen
    jobs.filter((value) => {
        return sessionAttributes.job.visitedIDs.indexOf(value.id) !== -1
    })

    // check if there are new jobs not listen
    if (!jobs.length) {
        throw CreateError('', Errors.NoMoreJobs)
    }

    // pick up a new job
    const job = jobs[Math.ceil(Math.random() * jobs.length)]

    // mark the job as listen to
    sessionAttributes.job.visitedIDs.push(job.id)

    return job
}