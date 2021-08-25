import axios from 'axios';
import {BASE_URL} from './BaseURL';

const trialBalanceReportRoute = `${BASE_URL.local}/reports/trial-balance`;


export const getTrialBalanceSheet = () => {
    return axios.get(trialBalanceReportRoute, {}, {'content-type': 'application/json' });
};