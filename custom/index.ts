import { SkillBuilders, DynamoDbPersistenceAdapter } from 'ask-sdk';
import * as Intents from './intents'
import * as Errors from './errors';
import * as Interceptors from './interceptors'
import * as PersonalityIntents from './intents/personality'
import * as CheckPersonalityIntents from './intents/checkPersonality'
import { config } from './interceptors/config';

export const handler = SkillBuilders.custom()
    .addRequestHandlers(

        // built in intents
        Intents.LaunchRequestHandler,
        Intents.HelpIntentHandler,
        Intents.CancelAndStopIntentHandler,
        Intents.SessionEnded,

        // custom intents

        // personality
        PersonalityIntents.PersonalityIntentHandler,
        PersonalityIntents.ValidateStatementHandler,
        PersonalityIntents.DenyStatementHandler,
        PersonalityIntents.RepeatQuestionIntentHandler,

        // check personality
        CheckPersonalityIntents.CheckMyPersonalityIntentHandler,
        CheckPersonalityIntents.AllowStartTestIntentHandler,
        CheckPersonalityIntents.DenyStartTestIntentHandler,

        // job search
        Intents.JobSearchIntentHandler
    )
    .addErrorHandlers(
        Errors.ErrorFindingJobs,
        Errors.ErrorNoMoreJobs,
        Errors.Unknown,
    )
    .addRequestInterceptors(
        Interceptors.LoadPersistentAttributes,
        Interceptors.Localization,
    ).addResponseInterceptors(
        Interceptors.SavePersistentAttributes,
    )
    .withPersistenceAdapter(new DynamoDbPersistenceAdapter({
        createTable: true,
        tableName: config.dynamoDbTableName,
    }))
    .lambda();
