import actionTypes from '../../redux/ActionTypes';

const initialState = {
    financialStatement: {
        expenseAccountSum: 0,
        expenseAccounts: [],
        netIncome: 0,
        revenueAccountSum: 0,
        revenueAccounts: []
    },
    loading: false,
};

export default function FinancialStatementReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.GET_FINANCIAL_STATEMENT_REQUEST:
            return {...state, loading: true};
        case actionTypes.GET_FINANCIAL_STATEMENT_SUCCESS:
            const { financialStatement } = payload;
            return {...state, loading: false, financialStatement: financialStatement};
        case actionTypes.GET_FINANCIAL_STATEMENT_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
}