import React, { Component } from 'react'
import './TransactionItem.css'
import { Formatter } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'
import ReactToolTip from 'react-tooltip'

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
                    <p 
                        className='TransactionItem__amount'
                        data-tip='Transaction amount'
                    >
                        {Formatter.format(transactionAmount)}
                    </p>
                </div>
                    <label 
                        htmlFor={id} 
                        className='TransactionItem__toggle'
                    >
                        <span 
                            className='TransactionItem__roundup'
                            data-tip='Round up amount'
                        >
                            {Formatter.format(roundupAmount)}
                        </span>
                        
                        <input 
                            type='checkbox' 
                            id={id}
                            name='transactions' 
                            defaultChecked={isChecked}
                            onChange={e => this.context.handleCheckTransaction(e.target.id)}
                        />
                        <span 
                            className='circle'
                            data-tip={isChecked ? '' : 'Add'}
                        >
                        </span>
                    </label>
                    <ReactToolTip />
            </li>
        )
    }
}

export default TransactionItem