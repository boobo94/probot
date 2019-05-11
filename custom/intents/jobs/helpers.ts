import { HandlerInput } from "ask-sdk";
import { Errors } from "../../lib/types";
import { jobsControllerAPI, JobType, sanitizeJob } from "../../lib/jobsControllerAPI";
import { CreateError, GetSessionAttributes } from "../../lib/helpers";


export async function GetJob(handlerInput: HandlerInput): Promise<JobType> {
    let sessionAttributes = GetSessionAttributes(handlerInput)

    let jobs = await jobsControllerAPI.search(sessionAttributes.position, sessionAttributes.location);

    if (!jobs.length) {
        throw CreateError('', Errors.FindingJobs)
    }

    // filter to get all jobs not listen
    jobs = jobs.filter((job) => sessionAttributes.visitedIDs.indexOf(job.id) === -1)

    // check if there are new jobs not listen
    if (!jobs.length) {
        throw CreateError('', Errors.NoMoreJobs)
    }

    // pick up a new job
    const job = jobs[Math.ceil(Math.random() * jobs.length) - 1]

    // mark the job as listen to
    sessionAttributes.visitedIDs.push(job.id)

    return sanitizeJob(job)
}