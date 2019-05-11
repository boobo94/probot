import { RequestHandler } from 'ask-sdk';
import { IsIntent, GetSessionAttributes, GetRequestAttributes, CreateError } from '../../lib/helpers';
import { IntentTypes, States, Errors } from "../../lib/types";
import { GetJob } from './helpers';

export const NotInterestedJobIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.JobSearch && IsIntent(handlerInput, IntentTypes.No)
    },
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);

        let speechText: string
        try {
            const job = await GetJob(handlerInput)
            speechText = t('JOB_DESCRIPTION', job.title, job.company, job.location, job.description)
        } catch (err) {
            throw CreateError(err, Errors.FindingJobs)
        }

        const question = t('INTERESTED_JOB')

        return handlerInput.responseBuilder
            .speak(`${speechText} ${question}`)
            .reprompt(question)
            .getResponse();
    }
};

