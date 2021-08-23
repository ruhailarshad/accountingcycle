import { combineReducers } from 'redux';

import {reducer as generalJournalReducer} from '../../Features/GeneralJournal/ducks';

const rootReducer = combineReducers({
    generalJournalReducer,
});

export default rootReducer;