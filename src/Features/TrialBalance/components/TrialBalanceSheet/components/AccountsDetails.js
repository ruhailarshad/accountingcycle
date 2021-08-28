import React from 'react'

function AccountsDetails({accountsDetails, accountsSum}) {
    return (
        <>
        <ol>
            {
                accountsDetails.map(([key,value], index) => {
                    const {accountName, balance, accountType} = value;
                    return (
                    <div>
                        <li>
                            <span>{accountName + '  '}</span>
                            <span>{balance}</span>
                            <span>{accountType}</span>
                        </li>
                    </div>);
                })
            }
        </ol>
        <div>
            Balance: {accountsSum}
        </div>
        </>
    )
}

export default AccountsDetails
