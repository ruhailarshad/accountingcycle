import actionTypes from '../../redux/ActionTypes'

export const getGeneralJournal = () => {
    return (dispatch, getState, {APIs}) => {
        dispatch(getGeneralJournalRequest());
    }
}

export const getGeneralJournalRequest = (isLoading) => {

    return {
        type: actionTypes.GET_GENERAL_JOURNAL_LIST_REQUEST,
        payload: { isLoading }
    }
}