import React from 'react';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import classes from './financialreport.module.css';
function FinancialReport({ financialReportData }) {
  const {
    financialStatement: {
      assetsSum,
      revenueAccountSum,
      expenseAccountSum,
      liabilitiesSum,
      ownerWithdrawlSum,
      ownerEquitySum,
    },
  } = financialReportData;

  const netIncome = revenueAccountSum - expenseAccountSum;
  const ownerEquityStatement = ownerEquitySum + netIncome - ownerWithdrawlSum;

  const listOfData = (e) => {
    let balanceData;
    if (e === 'a') {
      balanceData = financialReportData.financialStatement.assetsAccounts;
    } else if (e === 'l') {
      balanceData = financialReportData.financialStatement.liabilitiesAccounts;
    } else if (e === 'e') {
      balanceData = financialReportData.financialStatement.expenseAccounts;
    } else {
      balanceData = financialReportData.financialStatement.revenueAccounts;
    }

    if (balanceData) {
      return balanceData.map((arr, index) => (
        <div className={classes['elemets-revenue-expense']}>
          <p>{`${arr.accountName}: `}</p>
          <div>{arr.balance}</div>
        </div>
      ));
    } else {
    }
  };
  return (
    // <div>Financail Report Date is : {JSON.stringify(financialReportData)}</div>
    <section>
      {/* net income */}
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
            {listOfData('r')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>

              <div className={classes.total}>{revenueAccountSum}</div>
            </div>
          </div>
          <div className={classes.expense}>
            <h1>Expenses</h1>
            <hr />
            {listOfData('e')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>
              <div className={classes.total}>{expenseAccountSum}</div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.netincome}>
          <b>
            <p>Net Income : </p>
          </b>
          <p> Total Revenue - Total Expense = {netIncome}</p>
        </div>
      </div>
      {/* owner equity statement */}
      <div>
        <div className={classes.header}>
          <p
            className=" bg-info
"
          >
            Owner Equity Statement
          </p>
        </div>
        <div className={classes['owner-statement']}>
          <div className={classes['owner-equity']}>
            <b>Owner Equity:</b>
            <p>${ownerEquitySum}</p>
          </div>
          <div className={classes['net-income']}>
            <b>Net Income</b>
            <p>${netIncome}</p>
          </div>
          <div className={classes['owner-withdrawl']}>
            <b>Owner Withdrawl:</b>
            <p>${ownerWithdrawlSum}</p>
          </div>
          <hr />
          <div className={classes['ending-balance']}>
            <b>Ending Balance Of Owner:</b>
            <p>${ownerEquityStatement}</p>
          </div>
        </div>
      </div>

      {/* BalanceSheet */}
      <br />

      <div>
        <div className={classes.header}>
          <p
            className=" bg-info
"
          >
            Balance Sheet
          </p>
        </div>
        <div className={classes['rev-exp-container']}>
          <div className={classes.revenue}>
            <h1>Assets</h1>
            <hr />
            {listOfData('a')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>

              <div className={classes.total}>{assetsSum}</div>
            </div>
          </div>
          <div className={classes.expense}>
            <h1>Liability</h1>
            <hr />
            {listOfData('l')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>
              <div className={classes.total}>{liabilitiesSum}</div>
            </div>
          </div>
        </div>
        <br />
        <div className={`${classes.netincome}  ${classes.assetliab}`}>
          <div>
            <b>
              <p> Assets=Liability + O.E </p>
            </b>
          </div>
          <div>
            <h4>
              {' '}
              {assetsSum} = {liabilitiesSum - ownerEquitySum}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialReport;
