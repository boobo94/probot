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
    JobSearch = "jobSearchIntent"
}

export enum States {
    InProgess = "TEST_IN_PROGRESS",
    Finished = "TEST_FINISHED",
    JobSearch = "JOB_SEARCH",
    CheckPersonality = "CHECK_PERSONALITY",
}