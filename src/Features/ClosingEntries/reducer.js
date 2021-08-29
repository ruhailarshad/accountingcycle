import actionTypes from '../../redux/ActionTypes';

const initialState = {
  loading: false,
};

export default function ClosingReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.POST_CLOSING_ENTRIES_REQUEST:
      return { ...state, loading: true };
    case actionTypes.POST_CLOSING_ENTRIES_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.POST_CLOSING_ENTRIES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
