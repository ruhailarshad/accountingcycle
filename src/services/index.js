import { postGeneralEntry, getGeneralEntry } from './GeneralJounral';
import {getTrialBalanceSheet} from './TrialBalanceSheet';
import { getFinancialStatement } from "./FinancialStatement";

export const services = {
    postGeneralEntry,
    getGeneralEntry,
    getTrialBalanceSheet,
    getFinancialStatement,
};