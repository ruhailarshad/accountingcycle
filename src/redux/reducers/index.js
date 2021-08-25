import { combineReducers } from 'redux';

import generalJournal from '../../Features/GeneralJournal/reducer';
import TrialBalanceSheet from '../../Features/TrialBalance/reducer'

const rootReducer = combineReducers({
    generalJournal,
    TrialBalanceSheet,
});

export default rootReducer;