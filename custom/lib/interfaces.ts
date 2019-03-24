import { States } from "./types";
import { TestSessionAttributes, PersonalityTestResult } from "../intents/personality/interface";
export interface RequestAttributes {
    /**
     * Searches for the translation of the given key
     * @param key
     * @param args
     */
    t(key: string, ...args: any[]): any;

    tr(key: string): string;

}
export interface SessionAttributes {
    state: States
    test: TestSessionAttributes
    firstTimeUser: boolean;
}

export interface PersistentAttributes {
    /**
     * The version of the attributes. If the version doesn't match with the `VERSION` in `lib/constants.ts`,
     * the attributes will be reset.
     */
    version: string;

    /**
     * The results of personality test
     */
    personality: PersonalityTestResult[];

}