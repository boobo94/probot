import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";

export const StartTestHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.Starting && IsIntent(handlerInput, IntentTypes.Yes);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);

        // change the state to start the test
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.InProgess

        const speechText = t("TEST_STARTED")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();

    }
};