import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getTrialBalance } from './actions'

function TrialBalance() {
    useEffect(() => {
        dispatch(getTrialBalance());
    }, []);
    const dispatch = useDispatch();
    const { trialBalanceReducer } = useSelector(state => {
        const { trialBalanceReducer } = state; 
        return {
            trialBalanceReducer,
        };
    });
    return (
        <div>
            Trial Balance
        </div>
    )
}

export default TrialBalance
