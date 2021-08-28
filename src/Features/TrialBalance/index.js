/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getTrialBalance } from './actions'
import TrialBalanceSheetComponent from './components/TrialBalanceSheet/Index';

function TrialBalance() {
    useEffect(() => {
        dispatch(getTrialBalance());
    }, []);
    const dispatch = useDispatch();
    const { TrialBalanceSheet: {loading, trialBalanceList} } = useSelector(state => {
        const { TrialBalanceSheet } = state; 
        return {
            TrialBalanceSheet,
        };
    });
    console.log(trialBalanceList);
    if(loading) return <div>Loading</div>;
    return (
        <div>
            <TrialBalanceSheetComponent {...trialBalanceList}  />
        </div>
    )
}

export default TrialBalance
