
export enum IntentTypes {
    Help = "AMAZON.HelpIntent",
    Stop = "AMAZON.StopIntent",
    Cancel = "AMAZON.CancelIntent",
    Fallback = "AMAZON.FallbackIntent",
    Yes = "AMAZON.YesIntent",
    No = "AMAZON.NoIntent",
    Pause = "AMAZON.PauseIntent",

    PersonalityTest = "personalityTestIntent",
    JobSearch = "jobSearchIntent"
}

export enum States {
    Starting = "TEST_STARTS",
    InProgess = "TEST_IN_PROGRESS",
    Finished = "TEST_FINISHED",
    JobSearch = "JOB_SEARCH",
}