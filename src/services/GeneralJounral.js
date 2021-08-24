import axios from 'axios';
import {BASE_URL} from './BaseURL';

const GeneralJournalRoute = `${BASE_URL.local}/accounts/general-entries`;

export const postGeneralEntry = (generalEntryPayload) => {
    return axios.post(GeneralJournalRoute, generalEntryPayload, {'content-type': 'application/json' });
};


export const getGeneralEntry = () => {
    return axios.get(GeneralJournalRoute, {}, {'content-type': 'application/json' });
};