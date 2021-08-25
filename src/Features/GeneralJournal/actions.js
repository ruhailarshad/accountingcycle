import actionTypes from '../../redux/ActionTypes'

export const getGeneralJournalList = () => {
    return async (dispatch, getState, { services: { getGeneralEntry } }) => {
        dispatch(getGeneralJournalListRequest());
        try {
            const {data: {data: generalEntries}} = await getGeneralEntry();
            dispatch(getGeneralJournalListSuccess(generalEntries));
        }
        catch(error) {
            dispatch(getGeneralJournalListError());
        }
    };
};

export const getGeneralJournalListRequest = (isLoading) => {
    return {
        type: actionTypes.GET_GENERAL_JOURNAL_LIST_REQUEST,
        payload: { isLoading }
    }
};


export const getGeneralJournalListSuccess = (generalEntries) => {
    return {
        type: actionTypes.GET_GENERAL_JOURNAL_LIST_SUCCESS,
        payload: { generalEntries }
    }
};

export const getGeneralJournalListError = () => {
    return {
        type: actionTypes.GET_GENERAL_JOURNAL_LIST_ERROR,
    }
};


export const postGeneralEntry = (generalEntries) => {
    const entries = generalEntries;
    return async (dispatch, getState, { services: { postGeneralEntry } }) => {
        dispatch(postGeneralJournalEntryRequest());
        try {
            const {data: {data: generalEntries}} = await postGeneralEntry(entries);
            dispatch(getGeneralJournalList());
            dispatch(setFormModalActiveStatus(false));
        }
        catch(error) {
            dispatch(postGeneralJournalEntryError());
        }
    };
};

export const postGeneralJournalEntryRequest = (isLoading) => {
    return {
        type: actionTypes.POST_GENERAL_JOURNAL_ENTRY_REQUEST,
        payload: { isLoading }
    }
};

export const postGeneralJournalEntryError = () => {
    return {
        type: actionTypes.POST_GENERAL_JOURNAL_ENTRY_ERROR,
    }
};

export const setFormModalActiveStatus = (isModalActive) => {
    return {
        type: actionTypes.SET_FORM_MODAL_ACTIVE_STATUS,
        payload: { isModalActive }
    }
};

