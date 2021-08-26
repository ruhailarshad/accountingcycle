import { combineReducers } from 'redux';

import generalJournal from '../../Features/GeneralJournal/reducer';
import TrialBalanceSheet from '../../Features/TrialBalance/reducer'
import FinancialStatement from '../../Features/FinancialStatement/reducer';

const rootReducer = combineReducers({
    generalJournal,
    TrialBalanceSheet,
    FinancialStatement,
});

export default rootReducer;