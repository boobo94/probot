import axios from "axios";
import { config } from "../interceptors/config";

const instance = axios.create({
    baseURL: config.IndeedBaseURL,
    timeout: 1000,
    params: {
        'published': config.IndeedPublisherID,
        'v': 2,
        'format': 'json',
    }
});

const search = (q: string, l: string): Promise<any> => {

    return instance.get(null, {
        params: {
            q,
            l,
        }
    })
        .then((response) => {
            if (response.data.error) {
                throw response.data.error
            }

            return response.data
        })
        .catch(err => {
            throw err
        })

}

export default {
    instance,
    search,
}