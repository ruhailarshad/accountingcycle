/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AccountDetails from './components/AccountsDetails';

function TrialSheet({debitAccountsDetails, creditAccountsDetails, creditAccountsSum, debitAccountsSum}) {
    return (
        <div className="container-fluid h-100 card w-100">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Debit</h1>
                    <AccountDetails accountsDetails={debitAccountsDetails} accountsSum={debitAccountsSum} />
                </div>
                <div className="col-lg-6">
                    <h1>Credit</h1>
                    <AccountDetails accountsDetails={creditAccountsDetails} accountsSum={creditAccountsSum} />
                </div>
            </div>
        </div>
    )
}

export default TrialSheet;
