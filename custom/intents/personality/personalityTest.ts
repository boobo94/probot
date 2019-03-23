import { RequestHandler } from "ask-sdk";
import { IsIntent, GetRequestAttributes, GetSessionAttributes } from '../../lib/helpers';
import { IntentTypes, States } from "../../lib/types";

export const PersonalityIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.PersonalityTest)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput)
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.Starting

        const speechText = t("START_TEST_QUESTION")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};