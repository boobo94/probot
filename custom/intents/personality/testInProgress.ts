import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, GetRequestAttributes, GetPersistentAttributes } from "../../lib/helpers";
import { IntentTypes, States } from "../../lib/types";
import tests from "./tests";
import { SessionAttributes } from "../../lib/interfaces";
import { PersonalityTestResult, PersonalityType } from './interface';

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

        const nextStatement = currentTest[attributes.test.statementId]

        const speechText = nextStatement.Statement
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
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput);
        const attributes = GetSessionAttributes(handlerInput);
        const persistentAttributes = await GetPersistentAttributes(handlerInput)

        attributes.state = States.Finished

        const results = getPersonalityResults(attributes)
        const scoresString = getPersonalityScore(results, t)
        const personalityDescription = getMyPersonalitiesDescription(results, t)

        // save results as persisent attributes
        persistentAttributes.personality = results

        const speechText = t("TEST_ENDED", scoresString, personalityDescription)
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};

function getPersonalityResults(attributes: SessionAttributes): Array<PersonalityTestResult> {
    const score = attributes.test.score

    let personalityResults: PersonalityTestResult[] = []
    for (const key in score)
        personalityResults.push({
            personality: key,
            total: score[key]
        })

    // sort descendent by total score
    personalityResults.sort((a, b) => {
        if (a.total > b.total) return -1
        return 1
    })

    // keep just the first 3 elements
    return personalityResults.filter((value, index, arr) => {
        return index < 3
    })

}

export const getPersonalityScore = (arr: Array<PersonalityTestResult>, t: any): string => {
    let scoreResponse: string = ''
    let personality: string = ''


    arr.forEach((value, index) => {

        if (index > 0) {
            scoreResponse += ', '
        }

        switch (value.personality) {
            case PersonalityType.R:
                scoreResponse += t('REALISTIC_TITLE')
                break;
            case PersonalityType.I:
                scoreResponse += t('INVESTIGATIVE_TITLE')
                break;
            case PersonalityType.A:
                scoreResponse += t('ARTISTIC_TITLE')
                break;
            case PersonalityType.S:
                scoreResponse += t('SOCIAL_TITLE')
                break;
            case PersonalityType.E:
                scoreResponse += t('ENTERPRISING_TITLE')
                break;
            case PersonalityType.C:
                scoreResponse += t('CONVENTIONAL_TITLE')
                break;
        }
        personality += value.personality
        scoreResponse += ` : ${value.total}`
    })

    return `${personality}, ${scoreResponse}`
}

export const getMyPersonalitiesDescription = (arr: Array<PersonalityTestResult>, t: any): string => {
    let response: string = ''

    arr.forEach((value) => {
        switch (value.personality) {
            case PersonalityType.R:
                response += `${t('REALISTIC_TITLE')}: ${t('REALISTIC_MSG')}`
                break;
            case PersonalityType.I:
                response += `${t('INVESTIGATIVE_TITLE')}: ${t('INVESTIGATIVE_MSG')}`
                break;
            case PersonalityType.A:
                response += `${t('ARTISTIC_TITLE')}: ${t('ARTISTIC_MSG')}`
                break;
            case PersonalityType.S:
                response += `${t('SOCIAL_TITLE')}: ${t('SOCIAL_MSG')}`
                break;
            case PersonalityType.E:
                response += `${t('ENTERPRISING_TITLE')}: ${t('ENTERPRISING_MSG')}`
                break;
            case PersonalityType.C:
                response += `${t('CONVENTIONAL_TITLE')}: ${t('CONVENTIONAL_MSG')}`
                break;
        }
    })

    return response
}