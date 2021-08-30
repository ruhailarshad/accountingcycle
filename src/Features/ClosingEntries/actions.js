import actionTypes from '../../redux/ActionTypes';

export const postClosing = () => {
  return async (dispatch, _getState, { services: { postClosingEntries } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntries();
      dispatch(postClosingIncome());
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
      dispatch(postClosingWithdrawal());
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
      dispatch(postClosingDelete());
    } catch (error) {
      dispatch(postClosingEntriesError());
    }
  };
};


export const postClosingDelete = () => {
  return async (dispatch, _getState, { services: { postClosingEntriesDelete } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntriesDelete();
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

export const postClosingEntriesSuccess = () => {
  return {
    type: actionTypes.POST_CLOSING_ENTRIES_SUCCESS,
  };
};

export const postClosingEntriesError = () => {
  return {
    type: actionTypes.POST_CLOSING_ENTRIES_FAILURE,
  };
};
