import * as  Alexa from 'ask-sdk'
import { GetRequestAttributes } from '../lib/helpers';
import { Errors } from '../lib/types';

export const ErrorFindingJobs: Alexa.ErrorHandler = {
    canHandle(_, error) {
        return error.name === Errors.FindingJobs
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        const { t } = GetRequestAttributes(handlerInput);
        const speechOutput = t('ERROR_FINDING_JOBS');

        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();

    },
};
