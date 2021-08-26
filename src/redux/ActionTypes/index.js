import { GeneralJournal } from './GeneralJournalActionTypes';
import { TrialBalance } from './TrialBalanceActionTypes';
import { FinancialStatement } from './FinancialStatementActionTypes';

const actionTypes = {
    ...GeneralJournal,
    ...TrialBalance,
    ...FinancialStatement,
};

export default actionTypes;