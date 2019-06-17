import { IsIntent, GetRequestAttributes, GetSessionAttributes } from '../../lib/helpers';
import { IntentTypes, States } from "../../lib/types";
import tests from "../personality/tests";
import { RequestHandler } from 'ask-sdk';

export const PersonalityIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.PersonalityTest)
    },
    handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);

        // change the state to start the test
        const attributes = GetSessionAttributes(handlerInput)
        attributes.state = States.InProgess

        // get a random test
        attributes.test = {
            id: getRandomTest(tests),
            statementId: 0,
            score: {
                R: 0,
                I: 0,
                A: 0,
                S: 0,
                E: 0,
                C: 0,
            },
        }

        const currentTest = tests[attributes.test.id]
        const currentStatement = currentTest[attributes.test.statementId]

        const speechText = `${t("TEST_STARTED")} ${currentStatement.Statement}`
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();

    }
};

function getRandomTest<T>(arr: T[]): number {
    return Math.floor(Math.random() * arr.length)
}