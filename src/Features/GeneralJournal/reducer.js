import actionTypes from '../../redux/ActionTypes';

export default function GJReducer(state={}, action) {
    const { type, payload } = action;
    switch(type){
        case actionTypes.GET_GENERAL_JOURNAL_LIST_REQUEST:
            return state;   
        case actionTypes.GET_GENERAL_JOURNAL_LIST_SUCCESS:
            return state;   
        case actionTypes.GET_GENERAL_JOURNAL_LIST_ERROR:
            return state;   
        default:
            return state;
    }
};