import { combineReducers } from 'redux';

import generalJournalReducer from '../../Features/GeneralJournal/reducer';

const rootReducer = combineReducers({
    generalJournalReducer,
});

export default rootReducer;