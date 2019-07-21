import { Slot, SlotConfirmationStatus } from "ask-sdk-model";

export enum IntentTypes {
    Help = "AMAZON.HelpIntent",
    Stop = "AMAZON.StopIntent",
    Cancel = "AMAZON.CancelIntent",
    Fallback = "AMAZON.FallbackIntent",
    Yes = "AMAZON.YesIntent",
    No = "AMAZON.NoIntent",
    Pause = "AMAZON.PauseIntent",

    PersonalityTest = "personalityTestIntent",
    CheckMyPersonality = "checkMyPersonalityIntent",
    JobSearch = "jobSearchIntent",
    RepeatQuestion = "repeatQuestionTestIntent",
}

export enum RequestTypes {
    Launch = "LaunchRequest",
    Intent = "IntentRequest",
    SessionEnded = "SessionEndedRequest",
}

export enum States {
    InProgess = "TEST_IN_PROGRESS",
    Finished = "TEST_FINISHED",
    JobSearch = "JOB_SEARCH",
    CheckPersonality = "CHECK_PERSONALITY",
}

export enum Errors {
    FindingJobs = 'FINDING_JOBS_ERROR',
    NoMoreJobs = 'NO_MORE_JOBS_ERROR',
}

export enum SlotTypes {
    Position = "position",
    Location = "location",
}

export type SlotValue = {
    name: string;
    value: string
    isMatch: boolean;
    confirmationStatus: SlotConfirmationStatus;
}

export type SlotValues = {
    [key: string]: SlotValue | undefined;

}
