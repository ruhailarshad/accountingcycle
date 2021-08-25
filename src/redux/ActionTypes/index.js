import {GeneralJournal} from './GJActionTypes';
import { TrialBalance } from './TrialBalanceActionTypes';

const actionTypes = {
    ...GeneralJournal,
    ...TrialBalance,
};

export default actionTypes;