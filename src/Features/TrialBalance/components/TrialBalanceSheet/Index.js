/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import LoadingSpinner from '../../../../components/UI/LoadingSpinner';
import classes from './trialbalancesheet.module.css';

function TrialBalanceSheetComponent({
  accountDetails,
  debitAccountsSum,
  creditAccountsSum,
  loading,
}) {
  const renderTrialBalance = () => {
    if (accountDetails) {
      return accountDetails.map(
        ({ accountName, balance, accountType }, index) => (
          <tr>
            {accountName && <td>{accountName}</td>}

            {(accountType === 'Asset' || accountType === 'Expense') &&
            balance ? (
              <td>{balance}</td>
            ) : (
              <td></td>
            )}
            {(accountType === 'Liability' ||
              accountType === 'Owner Equity' ||
              accountType === 'Revenue') &&
            balance ? (
              <td>{balance}</td>
            ) : (
              <td></td>
            )}
          </tr>
        )
      );
    }
  };

  return (
    <section>
      <div>
        <div className={classes.header}>
          <p
            className=" bg-info
"
          >
            Trial Balance
          </p>
        </div>
        <div className={classes.trialTable}>
          <table
            className={`table table-striped table-bordered table-hover ${classes.tabletag}`}
          >
            {!loading && (
              <thead className={classes.thead}>
                <tr>
                  <td className={classes['account-name']}>Account Name</td>

                  <td className={classes.debit}>Debit</td>
                  <td className={classes.credit}>Credit</td>
                </tr>
              </thead>
            )}

            {!loading && (
              <tbody>
                {renderTrialBalance()}
                <tr>
                  <td>
                    <b>Total:</b>
                  </td>
                  <td>
                    <b>{debitAccountsSum}</b>
                  </td>
                  <td>
                    <b>{creditAccountsSum}</b>
                  </td>
                </tr>
              </tbody>
            )}
            {loading && <LoadingSpinner />}
          </table>
        </div>
      </div>
    </section>
  );
}

export default TrialBalanceSheetComponent;
