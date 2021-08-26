import actionTypes from '../../redux/ActionTypes';

const initialState = {
    loading: false,
    trialBalanceList: {
        creditAccountDetails: {},
        creditAccountsSum: 0,
        debitAccountsDetails: {},
        debitAccountsSum: 0,
    },
};

export default function TrialBalanceReducer (state=initialState, action) {
    const {payload, type} = action;
    switch(type) {
        case actionTypes.GET_TRIAL_BALANCE_SHEET_REQUEST:
            return {...state, loading: true};
        case actionTypes.GET_TRIAL_BALANCE_SHEET_SUCCESS:
            const { trialBalanceSheet } = payload;
            return {...state, loading: false, trialBalanceList: trialBalanceSheet};
        case actionTypes.GET_TRIAL_BALANCE_SHEET_ERROR:
            return {...state, loading: false};
        default:
            return state;    
    }
}