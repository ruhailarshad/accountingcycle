import actionTypes from '../../redux/ActionTypes';

export const getTrialBalance = () => {
    return async (dispatch, _getState, { services: { getTrialBalanceSheet } }) => {
        dispatch(getTrialBalanceSheetRequest());
        try {
            const { data } = await getTrialBalanceSheet();
            dispatch(getTrialBalanceSheetSuccess(data));
        } catch (error) {
            dispatch(getTrialBalanceSheetError());
        }
    };
};


export const getTrialBalanceSheetRequest = () => {
    return  {
        type: actionTypes.GET_TRIAL_BALANCE_SHEET_REQUEST,
    }
};


export const getTrialBalanceSheetSuccess = (trialBalanceSheet) => {
    return  {
        type: actionTypes.GET_TRIAL_BALANCE_SHEET_SUCCESS,
        payload: { trialBalanceSheet },
    }
};

export const getTrialBalanceSheetError = () => {
    return  {
        type: actionTypes.GET_TRIAL_BALANCE_SHEET_ERROR,
    }
};