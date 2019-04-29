import { RequestHandler } from "ask-sdk";
import { GetRequestAttributes, GetPersistentAttributes, IsIntent, GetSessionAttributes } from '../../lib/helpers';
import { IntentTypes, States } from "../../lib/types";
import { getMyPersonalitiesDescription, getPersonalityScore } from '../personality/testInProgress';

export const CheckMyPersonalityIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.CheckMyPersonality)
    },
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const { personality } = await GetPersistentAttributes(handlerInput)

        if (personality.length) {
            const scoresString = getPersonalityScore(personality, t)
            const personalityDescription = getMyPersonalitiesDescription(personality, t)

            const speechText = t("CHECK_PERSONALITY", scoresString, personalityDescription)
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard(t('SKILL_NAME'), speechText)
                .getResponse();
        }

        // change the state to verify what the user wants next
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.CheckPersonality

        const speechText = t("PERSONALITY_UNAVAILABLE")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};