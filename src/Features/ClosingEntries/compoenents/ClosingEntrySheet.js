import React from 'react'

function ClosingEntrySheet({FinancialStatement}) {
    const { expenseAccounts, revenueAccounts } = FinancialStatement;

    const renderAccounts = (accounts) => {
        return(
            <div className="w-100 border">
                <div className="table table-hover">
                    <tr className="th">
                        <th>Account Name</th>    
                        <th>Credit Sum</th>    
                        <th>Debit Name</th>    
                    </tr>
                </div>
            {accounts.map(account => {
                const {accountName, acccountTitle, creditSum, debitSum} = account;
            })}
            </div>
        );
    }
    return (
        <div style={{ height: '400px'}} className="conatainer card">
            <div className="row">
                <div style={{ height: '400px'}} className="col-lg-6">

                </div>
                <div style={{ height: '400px'}} className="col-lg-6">

                </div>
            </div>
        </div>
    )
}

export default ClosingEntrySheet
