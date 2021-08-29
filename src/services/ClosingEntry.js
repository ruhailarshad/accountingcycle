import axios from 'axios';
import { BASE_URL } from './BaseURL';

const postClosingEntry = `${BASE_URL.local}/closing-entry/closing`;

export const postClosingEntries = () => {
  return axios.get(postClosingEntry, {}, {});
};
