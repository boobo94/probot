import { RequestHandler } from "ask-sdk";
import { GetRequestAttributes, GetSessionAttributes, GetPersistentAttributes, IsIntent } from '../../lib/helpers';
import { IntentTypes } from "../../lib/types";
import { getMyPersonalitiesDescription, getPersonalityScore } from './testInProgress';

export const CheckMyPersonalityIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.CheckMyPersonality)
    },
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const persistentAttributes = await GetPersistentAttributes(handlerInput)

        const scoresString = getPersonalityScore(persistentAttributes.personality, t)
        const personalityDescription = getMyPersonalitiesDescription(persistentAttributes.personality, t)

        const speechText = t("TEST_ENDED", scoresString, personalityDescription)
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};