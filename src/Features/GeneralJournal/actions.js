import actionTypes from '../../redux/ActionTypes'
import _ from 'lodash';

export const getGeneralJournalList = () => {
    
    return async (dispatch, getState, { services: { getGeneralEntry } }) => {
        dispatch(getGeneralJournalListRequest());
        try {
            
            let {data: {data: generalEntries}} = await getGeneralEntry();
            generalEntries = _.chain(generalEntries).groupBy('transactionId').map(x => x).value();
           
            dispatch(getGeneralJournalListSuccess(generalEntries));
        }
        catch(error) {
            dispatch(getGeneralJournalListError());
        }
    };
};

export const getGeneralJournalListRequest = () => {
    return {
        type: actionTypes.GET_GENERAL_JOURNAL_LIST_REQUEST,
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
            // eslint-disable-next-line no-unused-vars
            const {data: {data: _generalEntries}} = await postGeneralEntry(entries);
            dispatch(getGeneralJournalList());
            dispatch(setFormModalActiveStatus(false));
            dispatch(postGeneralJournalSuccess(false));
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
export const postGeneralJournalSuccess = (isLoading) => {
    return {
        type: actionTypes.POST_GENERAL_JOURNAL_SUCCESS,
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

