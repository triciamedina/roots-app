import React from 'react'
import './TransactionItem.css'

function TransactionItem(props) {
    const { vendorName, transactionAmount, roundupAmount, id, isChecked } = props
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    return (
        <li>
            <div className='TransactionItem__container'>
                <p className='TransactionItem__title'>
                    {vendorName}
                </p>
                <p className='TransactionItem__amount'>
                    {formatter.format(transactionAmount)}
                </p>
            </div>
                <label htmlFor={id} className='TransactionItem__toggle'>
                    <span className='TransactionItem__roundup'>
                        {formatter.format(roundupAmount)}
                    </span>
                    <input type='checkbox' id={id} name='transactions' checked={isChecked}/>
                    <span className='circle'></span>
                </label>
        </li>
    )
}

export default TransactionItem