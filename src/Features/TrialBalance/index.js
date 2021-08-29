/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { getTrialBalance } from './actions';
import TrialBalanceSheetComponent from './components/TrialBalanceSheet/index';

function TrialBalance() {
  useEffect(() => {
    dispatch(getTrialBalance());
  }, []);
  const dispatch = useDispatch();
  const {
    TrialBalanceSheet: { loading, trialBalanceList },
  } = useSelector((state) => {
    const { TrialBalanceSheet } = state;
    return {
      TrialBalanceSheet,
    };
  });

  return (
    <div>
      <TrialBalanceSheetComponent {...trialBalanceList} loading={loading} />
    </div>
  );
}

export default TrialBalance;
