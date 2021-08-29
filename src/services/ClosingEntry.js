import axios from 'axios';
import { BASE_URL } from './BaseURL';

const postClosingEntry = `${BASE_URL.local}/closing-entry/closing`;
const postClosingEntryIncome = `${BASE_URL.local}/closing-entry-income/closing`;
const postClosingEntryWithdrawl = `${BASE_URL.local}/closing-entry-withdrawl/closing`;

export const postClosingEntries = () => {
  return axios.post(postClosingEntry, {}, {});
};

export const postClosingEntriesIncome = () => {
  return axios.post(postClosingEntryIncome, {}, {});
};

export const postClosingEntriesWithdrawl = () => {
  return axios.post(postClosingEntryWithdrawl, {}, {});
};
