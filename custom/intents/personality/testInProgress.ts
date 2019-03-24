import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";
import tests from "./tests";
import { SessionAttributes } from "../../lib/interfaces";

export const ValidateStatementHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.InProgess && IsIntent(handlerInput, IntentTypes.Yes);
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)
        const currentTest = tests[attributes.test.id]

        // calculate the current statement
        const currentStatement = currentTest[attributes.test.statementId]
        attributes.test.score[currentStatement.Type] += attributes.test.statementId + 1

        // if the last statement were asked, close the test
        if (++attributes.test.statementId === currentTest.length) {
            return FinishTestHandler.handle(handlerInput)
        }

        // prepare the next statement
        const nextStatement = currentTest[attributes.test.statementId]

        const speechText = nextStatement.Statement
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

        // if the last statement were asked, close the test
        if (++attributes.test.statementId === currentTest.length) {
            return FinishTestHandler.handle(handlerInput)
        }

        const currentStatement = currentTest[attributes.test.statementId]

        const speechText = currentStatement.Statement
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};

export const FinishTestHandler: RequestHandler = {
    canHandle(_) {
        return false
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.Finished

        //todo: check the results
        GetPersonalityResults(attributes)

        const speechText = t("TEST_ENDED")
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};

function GetPersonalityResults(attributes: SessionAttributes) {
    const score = attributes.test.score


    console.log(score)


    for (const key in score) {
        if (score.hasOwnProperty(key)) {
            const element = score[key];
            console.log(key + ' - ' + element)
        }
    }



}