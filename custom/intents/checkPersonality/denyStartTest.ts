import { IsIntent, GetRequestAttributes, GetSessionAttributes } from '../../lib/helpers';
import { IntentTypes, States } from "../../lib/types";
import { RequestHandler } from 'ask-sdk';

export const DenyStartTestIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.CheckPersonality && IsIntent(handlerInput, IntentTypes.No)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);

        const speechText = t("GOODBYE_MSG")
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

