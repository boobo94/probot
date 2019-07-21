import axios from "axios";
import { config } from "../interceptors/config";

const instance = axios.create({
    baseURL: config.jobsBaseURL,
    // timeout: 1000,
});

export interface JobType {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
}

const search = async (description: string, location: string): Promise<JobType[]> => {

    try {
        const response = await instance.get('/positions.json', {
            params: {
                description,
                location,
            }
        });

        return response.data;
    }
    catch (err) {
        throw err;
    }

}

const getJob = async (jobId: string): Promise<JobType> => {
    try {
        const response = await instance.get(`/positions/${jobId}.json`);

        return sanitizeJob(response.data);
    }
    catch (err) {
        throw err;
    }
}

export function sanitizeJob(job: JobType): JobType {
    job.description = job.description.replace(/<\/?[^>]+(>|$)/g, "")
    return job
}

export const jobsControllerAPI = {
    instance,
    search,
    getJob,
}