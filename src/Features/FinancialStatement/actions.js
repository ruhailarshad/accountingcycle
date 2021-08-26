import actionTypes from '../../redux/ActionTypes';

export const fetchFinancialStatement = () => {
    return async (dispatch, _getState, { services: { getFinancialStatement } }) => {
        dispatch(fetchFinancialStatementRequest());
        console.log('Fetch Started')
        try{
            const {data: financialStatement} = await getFinancialStatement();
            console.log('fetch Successful')
            dispatch(fetchFinancialStatementSuccess(financialStatement));
        }
        catch(error) {
            console.log('fetch Fail')
            dispatch(fetchFinancialStatementError());
        } 
    }
};


export const fetchFinancialStatementRequest = () => ({
    type: actionTypes.GET_FINANCIAL_STATEMENT_REQUEST,
});

export const fetchFinancialStatementSuccess = (financialStatement) => ({
    type: actionTypes.GET_FINANCIAL_STATEMENT_SUCCESS,
    payload: {financialStatement}
});

export const fetchFinancialStatementError = () => ({
    type: actionTypes.GET_FINANCIAL_STATEMENT_ERROR,
});