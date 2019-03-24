export interface StatementStructure {
    Statement: string
    Type: PersonalityType
}

export enum PersonalityType {
    R = "R",
    I = "I",
    A = "A",
    S = "S",
    E = "E",
    C = "C",
}

export interface TestSessionAttributes {
    score: Score
    id: number
    statementId: number
}

export interface Score {
    R: number
    I: number
    A: number
    S: number
    E: number
    C: number
}

export interface PersonalityTestResult {
    personality: string
    total: number
}