import { RequestHandler } from "ask-sdk";
import { IsIntent, GetRequestAttributes, CreateError } from '../../lib/helpers';
import { IntentTypes, Errors } from "../../lib/types";
import indeedControllerAPI from "../../lib/jobsControllerAPI";

export const JobSearchIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return IsIntent(handlerInput, IntentTypes.JobSearch)
    },
    async   handle(handlerInput) {
        const { t } = GetRequestAttributes(handlerInput)
        const speechText = t("SEARCH_JOBS_QUESTION")

        try {
            //todo: get the job name and location dynamic
            const jobs = await indeedControllerAPI.search('web developer', '');

            if (!jobs.length) {
                throw CreateError('', Errors.FindingJobs)
            }

            const getOne = jobs[Math.ceil(Math.random() * jobs.length)]

            console.log(jobs)
        } catch (err) {
            throw CreateError(err, Errors.FindingJobs)
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(t('SKILL_NAME'), speechText)
            .getResponse();
    }
};