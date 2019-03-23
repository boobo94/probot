import { RequestHandler } from "ask-sdk";
import { IsIntent, GetRequestAttributes } from '../../lib/helpers';
import { IntentTypes } from "../../lib/types";

export const PersonalityIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.PersonalityTest)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput)
        const speechText = t("WELCOME_MSG")

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};