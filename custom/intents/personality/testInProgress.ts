import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";
import tests from "./tests";
import { SessionAttributes } from "../../lib/interfaces";
import { StatementStructure } from "./interface";

export const ValidateStatementHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.InProgess && IsIntent(handlerInput, IntentTypes.Yes);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)

        const currentTest = tests[attributes.test.id]
        const currentStatement = currentTest[++attributes.test.statementId]
        attributes.test.score[currentStatement.Type] += attributes.test.statementId + 1

        const speechText = currentStatement.Statement
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};

export const DenyStatementHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.InProgess && IsIntent(handlerInput, IntentTypes.No);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)

        const currentTest = tests[attributes.test.id]
        const currentStatement = currentTest[++attributes.test.statementId]

        const speechText = currentStatement.Statement
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};

export const FinishTestHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state, test } = GetSessionAttributes(handlerInput);

        const currentTest = tests[test.id]

        return state === States.InProgess && ((currentTest.length - 1) === test.statementId)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.Finished

        //todo: check the results

        const speechText = t("TEST_ENDED")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};