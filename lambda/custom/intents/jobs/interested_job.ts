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

        const interestingJobId = visited[visited.length - 1]
        const interestingJob = await jobsControllerAPI.getJob(interestingJobId)
        const cardBody = `${t('COMPANY')}: ${interestingJob.company} \n\n ${t('LOCATION')}: ${interestingJob.location} \n\n ${t('URL')}: ${interestingJob.url}`
        let speechText = t('MARK_JOB_AS_SENT')

        try {
            const job = await GetJob(handlerInput)
            speechText += t('JOB_DESCRIPTION', job.title, job.company, job.location, job.description)
        } catch (err) {
            throw CreateError(err, Errors.FindingJobs)
        }

        const question = t('INTERESTED_JOB')
        return handlerInput.responseBuilder
            .speak(`${speechText} ${question}`)
            .reprompt(question)
            .withStandardCard(interestingJob.title, cardBody, interestingJob.company_logo)
            .getResponse();
    }
};

