/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFinancialStatement } from './actions';

// Components
import FinancialReport from './components/FinancialReport';

function FinancialStatementMainComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFinancialStatement());
    }, []);

    const { FinancialStatement } = useSelector((state) => {
        const { FinancialStatement } = state;
        return {
            FinancialStatement,
        }
    });

    return (
        <div>
            <FinancialReport financialReportData={FinancialStatement}/>
        </div>
    )
}

export default FinancialStatementMainComponent
