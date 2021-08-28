import React from 'react';
import classes from './financialreport.module.css';
function FinancialReport({ financialReportData }) {


  console.log(financialReportData);

  const { financialStatement: { assetsSum,revenueSum,expenseSum,liabilitiesSum,netIncome } } = financialReportData;
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
  const listOfBalanceSheetData = (e) => {
    const balanceData =
      e === 'a'
        ? financialReportData.financialStatement.assetsAccounts
        : financialReportData.financialStatement.liabilitiesAccounts;
if(balanceData){
    return balanceData.map((arr, index) => (
      <div className={classes['elemets-revenue-expense']}>
        <p>{`${arr.accountName}: `}</p>
        <div>{arr.balance}</div>
      </div>
    ));
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
            {listOfFinancialReportData('r')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>

              <div className={classes.total}>{revenueSum}</div>
            </div>
          </div>
          <div className={classes.expense}>
            <h1>Expenses</h1>
            <hr />
            {listOfFinancialReportData('e')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>
              <div className={classes.total}>{expenseSum}</div>
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
          <p>$30000</p>
        </div>
        <div className={classes['net-income']}>
          <b>Net Income</b>
          <p>${revenueSum - expenseSum}</p>
        </div>
        <div className={classes['owner-withdrawl']}>
        <b>Owner Withdrawl:</b>
        <p>$0</p>
        </div>
      <hr/>
      <div className={classes['ending-balance']}>
        <b>Ending Balance Of Owner:</b>
        <p>$60000</p>
      </div>
      </div>
      </div>

      {/* BalanceSheet */}
      <br/>
      
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
            {listOfBalanceSheetData('a')}

            <div className={classes['elemets-revenue-expense']}>
              <h4>Total :</h4>

              <div className={classes.total}>{assetsSum}</div>
            </div>
          </div>
          <div className={classes.expense}>
            <h1>Liability</h1>
            <hr />
            {listOfBalanceSheetData('l')}

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
          <p>  {assetsSum}  = {liabilitiesSum - revenueSum}</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default FinancialReport;
