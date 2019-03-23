import { RequestInterceptor } from "ask-sdk-core";
import * as sprintf from "i18next-sprintf-postprocessor";
import { locales } from "../../locales";
import { RequestAttributes } from "../lib/interfaces";
import * as i18n from "i18next";


type TranslationFunction = (...args: any[]) => string;

/**
 * Adds translation functions to the RequestAttributes.
 */
export const Localization: RequestInterceptor = {
    process(handlerInput) {
        const localizationClient = i18n.use(sprintf).init({
            lng: (handlerInput.requestEnvelope.request as any).locale,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: locales,
            returnObjects: true,
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
        attributes.t = function (...args: any[]) {
            return (localizationClient.t as TranslationFunction)(...args);
        };
        attributes.tr = function (key: any) {
            const result = localizationClient.t(key) as string[];

            return Random(result);
        };
    },
};

export function Random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}