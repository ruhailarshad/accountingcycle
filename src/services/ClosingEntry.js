import axios from 'axios';
import { BASE_URL } from './BaseURL';

const postClosingEntry = `${BASE_URL.local}/closing-entry/closing`;

export const getFinancialStatement = () => {
    return axios.get(postClosingEntry, {}, {});
}