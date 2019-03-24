import { SkillBuilders } from 'ask-sdk';
import * as Intents from './intents'
import * as Errors from './errors';
import * as Interceptors from './interceptors'

import * as PersonalityIntents from './intents/personality'

export const handler = SkillBuilders.custom()
    .addRequestHandlers(

        // built in intents
        Intents.LaunchRequestHandler,
        Intents.HelpIntentHandler,
        Intents.CancelAndStopIntentHandler,
        Intents.SessionEnded,

        // custom intents

        // personality
        PersonalityIntents.StartTestHandler,
        PersonalityIntents.DenyTestHandler,
        PersonalityIntents.PersonalityIntentHandler,
        PersonalityIntents.ValidateStatementHandler,
        PersonalityIntents.DenyStatementHandler,

        // job search
        Intents.JobSearchIntentHandler
    )
    .addErrorHandlers(
        Errors.Unknown,
    )
    .addRequestInterceptors(
        Interceptors.Localization,
    )
    .lambda();
