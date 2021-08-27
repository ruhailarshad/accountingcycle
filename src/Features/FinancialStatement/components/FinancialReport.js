import React from 'react';
import classes from './financialreport.module.css';
function FinancialReport({ financialReportData }) {
  console.log(financialReportData);
  let revSum = financialReportData.financialStatement.revenueAccountSum;
  let expSum = financialReportData.financialStatement.expenseAccountSum;
  const listOfFinancialReportData = (e) => {
    const financialData =
      e === 'e'
        ? financialReportData.financialStatement.expenseAccounts
        : financialReportData.financialStatement.revenueAccounts;

    return financialData.map((arr, index) => (
      <div className={classes['elemets-revenue-expense']}>
        <p>{`${arr.accountName}: `}</p>
        <div>{arr.balance}</div>
      </div>
    ));
  };
  return (
    // <div>Financail Report Date is : {JSON.stringify(financialReportData)}</div>
    <section>
      <div>
        <div className={classes.header}>
          <p
            className=" bg-info
"
          >
            Net Income
          </p>
        </div>
        <div className={classes['rev-exp-container']}>
          <div className={classes.revenue}>
            <h1>Revenues</h1>
            <hr />
            {listOfFinancialReportData('r')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>

              <div className={classes.total}>{revSum}</div>
            </div>
          </div>
          <div className={classes.expense}>
            <h1>Expenses</h1>
            <hr />
            {listOfFinancialReportData('e')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>
              <div className={classes.total}>{expSum}</div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.netincome}>
          <b>
            <p>Net Income : </p>
          </b>
          <p> Total Revenue - Total Expense = {revSum - expSum}</p>
        </div>
      </div>

      <div>
        <div className={classes.header}>
          <p
            className=" bg-info
"
          >
            Owner Equity
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinancialReport;
