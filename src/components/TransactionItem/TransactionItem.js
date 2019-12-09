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
            <div className='transactions__container'>
                <p className='transactions__item-name'>
                    {vendorName}
                </p>
                <p className='transactions__item-subtitle'>
                    {formatter.format(transactionAmount)}
                </p>
            </div>
                <label htmlFor={id} className='transactions-toggle'>
                    <span className='transactions-toggle__title'>
                        {formatter.format(roundupAmount)}
                    </span>
                    <input type='checkbox' id={id} name='transactions' checked={isChecked}/>
                    <span className='circle'></span>
                </label>
        </li>
    )
}

export default TransactionItem