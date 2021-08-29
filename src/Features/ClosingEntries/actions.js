import actionTypes from '../../redux/ActionTypes';

export const postClosing = () => {
  return async (dispatch, _getState, { services: { postClosingEntries } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntries();
      dispatch(postClosingIncome(data));
    } catch (error) {
      dispatch(postClosingEntriesError());
    }
  };
};


export const postClosingIncome = () => {
  return async (dispatch, _getState, { services: { postClosingEntriesIncome } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntriesIncome();
      dispatch(postClosingEntriesSuccess(data));
    } catch (error) {
      dispatch(postClosingEntriesError());
    }
  };
};

export const postClosingWithdrawal = () => {
  return async (dispatch, _getState, { services: { postClosingEntriesWithdrawl } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntriesWithdrawl();
      dispatch(postClosingEntriesSuccess(data));
    } catch (error) {
      dispatch(postClosingEntriesError());
    }
  };
};

export const postClosingEntriesRequest = () => {
  return {
    type: actionTypes.POST_CLOSING_ENTRIES_REQUEST,
  };
};

export const postClosingEntriesSuccess = (closingEntries) => {
  return {
    type: actionTypes.POST_CLOSING_ENTRIES_SUCCESS,
  };
};

export const postClosingEntriesError = () => {
  return {
    type: actionTypes.POST_CLOSING_ENTRIES_FAILURE,
  };
};
