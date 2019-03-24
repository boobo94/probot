import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";

export const DenyTestHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.Starting && IsIntent(handlerInput, IntentTypes.No);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);

        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.JobSearch

        const speechText = t("SEARCH_JOBS_QUESTION")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();

    }
};