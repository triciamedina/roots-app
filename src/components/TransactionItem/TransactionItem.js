import React, { Component } from 'react'
import './TransactionItem.css'
import { Formatter } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'

class TransactionItem extends Component {
    static contextType = RootsContext
    render() {
        const { vendorName, transactionAmount, roundupAmount, id, isChecked } = this.props
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
                    <label 
                        htmlFor={id} 
                        className='TransactionItem__toggle'
                    >
                        <span className='TransactionItem__roundup'>
                            {Formatter.format(roundupAmount)}
                        </span>
                        <input 
                            type='checkbox' 
                            id={id}
                            name='transactions' 
                            defaultChecked={isChecked}
                            onChange={e => this.context.handleCheckTransaction(e.target.id)}
                        />
                        <span className='circle'></span>
                    </label>
            </li>
        )
    }
}

export default TransactionItem