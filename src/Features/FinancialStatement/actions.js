import actionTypes from '../../redux/ActionTypes';

export const fetchFinancialStatement = () => {
  return async (
    dispatch,
    _getState,
    { services: { getFinancialStatement } }
  ) => {
    dispatch(fetchFinancialStatementRequest());

    try {
      const { data: financialStatement } = await getFinancialStatement();

      dispatch(fetchFinancialStatementSuccess(financialStatement));
    } catch (error) {
      dispatch(fetchFinancialStatementError());
    }
  };
};

export const fetchFinancialStatementRequest = () => ({
  type: actionTypes.GET_FINANCIAL_STATEMENT_REQUEST,
});

export const fetchFinancialStatementSuccess = (financialStatement) => ({
  type: actionTypes.GET_FINANCIAL_STATEMENT_SUCCESS,
  payload: { financialStatement },
});

export const fetchFinancialStatementError = () => ({
  type: actionTypes.GET_FINANCIAL_STATEMENT_ERROR,
});
