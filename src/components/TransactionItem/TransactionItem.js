import React from 'react'
import './TransactionItem.css'
import { Formatter } from '../Utils/Utils'

function TransactionItem(props) {
    const { vendorName, transactionAmount, roundupAmount, id, isChecked } = props
    return (
        <li className='TransactionItem'>
            <div className='TransactionItem__container'>
                <p className='TransactionItem__title'>
                    {vendorName}
                </p>
                <p className='TransactionItem__amount'>
                    {Formatter.format(transactionAmount)}
                </p>
            </div>
                <label htmlFor={id} className='TransactionItem__toggle'>
                    <span className='TransactionItem__roundup'>
                        {Formatter.format(roundupAmount)}
                    </span>
                    <input type='checkbox' id={id} name='transactions' checked={isChecked}/>
                    <span className='circle'></span>
                </label>
        </li>
    )
}

export default TransactionItem