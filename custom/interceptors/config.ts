
export interface Config {
    version: string;
    dynamoDbTableName: string;
    jobsBaseURL: string;
}

export enum EnvironmentTypes {
    Development = "dev",
    Production = "prod",
}

function Config(): Config {
    const env = process.env.ENV as EnvironmentTypes;
    if (env) {
        switch (env) {
            case EnvironmentTypes.Production:
                return {
                    version: "0.11",
                    dynamoDbTableName: "Probot-Alexa-Skill",
                    jobsBaseURL: 'https://jobs.github.com/positions.json',
                };
            default:
                return {
                    version: "0.11",
                    dynamoDbTableName: "Probot-Alexa-Skill-Dev",
                    jobsBaseURL: 'https://jobs.github.com/positions.json',
                };
        }
    }
    throw new Error("ENV environment variable not set");
}

export const config = Config()
