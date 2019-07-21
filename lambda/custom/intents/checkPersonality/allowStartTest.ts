import { IsIntent, GetSessionAttributes } from '../../lib/helpers';
import { IntentTypes, States } from "../../lib/types";
import { RequestHandler } from 'ask-sdk';
import { PersonalityIntentHandler } from '../personality/personalityTest';

export const AllowStartTestIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        const { state } = GetSessionAttributes(handlerInput);

        return state === States.CheckPersonality && IsIntent(handlerInput, IntentTypes.Yes)
    },
    handle(handlerInput) {
        return PersonalityIntentHandler.handle(handlerInput)
    }
};

