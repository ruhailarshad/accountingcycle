import actionTypes from '../../redux/ActionTypes';

const initialState = {
    loading: false,
    generalJounralEntries: [],
    isFormModalActive: false,
    isPostingGeneralEntry: false, 
};

export default function GJReducer(state=initialState, action) {
    const { type, payload } = action;
    switch(type){
        case actionTypes.GET_GENERAL_JOURNAL_LIST_REQUEST:
            return {...state, loading: true};   
            
        case actionTypes.GET_GENERAL_JOURNAL_LIST_SUCCESS:
            const { generalEntries } = payload;
            return {...state, generalJounralEntries: generalEntries, loading: false};   

        case actionTypes.GET_GENERAL_JOURNAL_LIST_ERROR:
            return {...state, loading: false};

        case actionTypes.POST_GENERAL_JOURNAL_ENTRY_REQUEST:
            return {...state, isPostingGeneralEntry: true};
        
            case actionTypes.POST_GENERAL_JOURNAL_SUCCESS:
            return {...state, isPostingGeneralEntry: true};

        case actionTypes.POST_GENERAL_JOURNAL_ENTRY_ERROR:
            return {...state, isPostingGeneralEntry: false}; 

        case actionTypes.SET_FORM_MODAL_ACTIVE_STATUS:
            const { isModalActive } = payload;
            return {...state, isFormModalActive: isModalActive }       
        default:
            return state;
    }
};