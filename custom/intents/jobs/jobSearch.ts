import { RequestHandler } from "ask-sdk";
import { IsIntent, GetRequestAttributes, CreateError, GetSessionAttributes, GetSlotValues } from '../../lib/helpers';
import { IntentTypes, Errors, States, SlotTypes } from "../../lib/types";
import { GetJob } from "./helpers";

export const JobSearchIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.JobSearch)
    },
    async handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput)
        let speechText: string

        try {
            let sessionAttributes = GetSessionAttributes(handlerInput)
            sessionAttributes.state = States.JobSearch

            sessionAttributes.visitedIDs = []

            // get the position and location
            const slots = GetSlotValues(handlerInput)
            sessionAttributes.position = slots[SlotTypes.Position].value;
            sessionAttributes.location = slots[SlotTypes.Location].value;

            // pick up a new job
            const job = await GetJob(handlerInput)

            speechText = t('JOB_DESCRIPTION', job.title)

        } catch (err) {
            throw CreateError(err, Errors.FindingJobs)
        }

        const question = t('INTERESTED_JOB')

        return handlerInput.responseBuilder
            .speak(`${speechText} ${question}`)
            .reprompt(question)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};