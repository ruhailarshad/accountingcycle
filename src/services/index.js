import { postGeneralEntry, getGeneralEntry } from './GeneralJounral';
import {getTrialBalanceSheet} from './TrialBalanceSheet';
import { getFinancialStatement } from "./FinancialStatement";
import {postClosingEntries, postClosingEntriesIncome, postClosingEntriesWithdrawl, postClosingEntriesDelete} from './ClosingEntry';

export const services = {
    postGeneralEntry,
    getGeneralEntry,
    getTrialBalanceSheet,
    getFinancialStatement,
    postClosingEntries,
    postClosingEntriesIncome,
    postClosingEntriesWithdrawl,
    postClosingEntriesDelete
};
