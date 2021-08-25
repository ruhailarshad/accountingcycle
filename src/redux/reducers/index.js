import { combineReducers } from 'redux';

import generalJournal from '../../Features/GeneralJournal/reducer';

const rootReducer = combineReducers({
    generalJournal,
});

export default rootReducer;