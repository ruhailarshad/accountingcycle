import actionTypes from '../../redux/ActionTypes';

export const postClosing = () => {
  return async (dispatch, _getState, { services: { postClosingEntries } }) => {
    dispatch(postClosingEntriesRequest());
    try {
      const { data } = await postClosingEntries();
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
