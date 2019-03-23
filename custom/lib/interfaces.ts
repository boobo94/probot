import { States } from "./types";


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
    score: Score
}

export interface Score {
    R: Number
    I: Number
    A: Number
    S: Number
    E: Number
    C: Number
}
