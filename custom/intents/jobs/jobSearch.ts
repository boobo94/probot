import { RequestHandler } from "ask-sdk";
import { IsIntent, GetRequestAttributes } from '../../lib/helpers';
import { IntentTypes } from "../../lib/types";

export const JobSearchIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.JobSearch)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput)
        const speechText = t("WELCOME_MSG")

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};