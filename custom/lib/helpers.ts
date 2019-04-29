import { HandlerInput } from "ask-sdk";
import { RequestAttributes, SessionAttributes, PersistentAttributes } from './interfaces';
import { Errors } from "aws-sdk/clients/s3";

export function IsIntent(handlerInput: HandlerInput, ...intents: string[]): boolean {
    if (handlerInput.requestEnvelope.request.type === "IntentRequest") {
        for (let i = 0; i < intents.length; i++) {
            if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
                return true;
            }
        }
    }
    return false;
}

export function IsType(handlerInput: HandlerInput, ...types: string[]): boolean {
    for (let i = 0; i < types.length; i++) {
        if (handlerInput.requestEnvelope.request.type === types[i]) {
            return true;
        }
    }
    return false;
}

export function GetRequestAttributes(handlerInput: HandlerInput): RequestAttributes {
    return handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
}

export function GetSessionAttributes(handlerInput: HandlerInput): SessionAttributes {
    return handlerInput.attributesManager.getSessionAttributes() as SessionAttributes;
}

export function GetPersistentAttributes(handlerInput: HandlerInput): Promise<PersistentAttributes> {
    return handlerInput.attributesManager.getPersistentAttributes() as Promise<PersistentAttributes>;
}

export function CreateError(message: string, name: string): Error {
    let error = new Error(message)
    error.name = name
    return error
}
