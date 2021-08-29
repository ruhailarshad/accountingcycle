import { GeneralJournal } from './GeneralJournalActionTypes';
import { TrialBalance } from './TrialBalanceActionTypes';
import { FinancialStatement } from './FinancialStatementActionTypes';
import { ClosingEntries } from './ClosingEntriesActiontype';
const actionTypes = {
  ...GeneralJournal,
  ...TrialBalance,
  ...FinancialStatement,
  ...ClosingEntries,
};

export default actionTypes;
