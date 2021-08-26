import axios from 'axios';
import { BASE_URL } from './BaseURL';

const finacialStatementRoute = `${BASE_URL.local}/financial-statement/financial-report`;

export const getFinancialStatement = () => {
    return axios.get(finacialStatementRoute, {}, {});
}