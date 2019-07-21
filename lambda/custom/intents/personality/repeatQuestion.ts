import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";
import tests from "./tests";

export const RepeatQuestionIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.InProgess && IsIntent(handlerInput, IntentTypes.RepeatQuestion);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)
        const currentTest = tests[attributes.test.id]

        // calculate the current statement
        const currentStatement = currentTest[attributes.test.statementId]

        const speechText = currentStatement.Statement
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};