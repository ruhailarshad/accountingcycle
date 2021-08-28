import React from 'react';

function AccountsDetails({ accountsDetails, accountsSum }) {
  console.log(accountsDetails);
  if (!accountsDetails) return null;
  return (
    <>
      <ol>
        {Object.entries(accountsDetails).map(([key, value], index) => {
          const { accountName, balance } = value;
          return (
            <div>
              <li>
                <span>{accountName + '  '}</span>
                <span>{balance}</span>
              </li>
            </div>
          );
        })}
      </ol>
      <div>Balance: {accountsSum}</div>
    </>
  );
}

export default AccountsDetails;
