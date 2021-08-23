import axios from 'axios';
import {BASE_URL} from './BaseURL';

const GeneralJournalRoute = `${BASE_URL.local}/accounts/general-entries`;

export const postGeneralEntry = (generalEntryPayload) => {
    debugger;
    return axios.post(GeneralJournalRoute, generalEntryPayload, {'content-type': 'application/json' });
};