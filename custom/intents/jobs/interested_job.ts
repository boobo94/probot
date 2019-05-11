import { RequestHandler } from 'ask-sdk';
import { IsIntent, GetSessionAttributes, GetRequestAttributes, CreateError } from '../../lib/helpers';
import { IntentTypes, States, Errors } from "../../lib/types";
import { jobsControllerAPI } from "../../lib/jobsControllerAPI";
import { GetJob } from './helpers';

export const InterestedJobIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.JobSearch && IsIntent(handlerInput, IntentTypes.Yes)
    },
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        let sessionAttributes = GetSessionAttributes(handlerInput)

        const visited = sessionAttributes.visitedIDs

        console.log(visited)
        const interestingJobId = visited[visited.length - 1]
        const interestingJob = await jobsControllerAPI.getJob(interestingJobId)

        // todo: send the job via email

        let speechText = t('MARK_JOB_AS_SENT')

        try {
            const job = await GetJob(handlerInput)
            speechText += t('JOB_DESCRIPTION', job.title, job.company, job.description)
        } catch (err) {
            throw CreateError(err, Errors.FindingJobs)
        }

        const question = t('INTERESTED_JOB')

        return handlerInput.responseBuilder
            .speak(`${speechText} ${question}`)
            .reprompt(question)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};
