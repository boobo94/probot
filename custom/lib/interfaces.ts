import { States } from "./types";
import { TestSessionAttributes } from "../intents/personality/interface";


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
}

