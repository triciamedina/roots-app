import React, { Component } from 'react'
import './TransactionsList.css'
import TransactionItem from '../TransactionItem/TransactionItem'
import RootsContext from '../../contexts/RootsContext'

class TransactionsList extends Component {
    static contextType = RootsContext
    render() {
        const items = this.context.transactions.items.map(item => 
            <TransactionItem 
                key={item.id}
                vendorName={item.vendorName} 
                transactionAmount={item.transactionAmount}
                roundupAmount={item.roundupAmount}
                id={item.id}
                isChecked={item.isChecked}
            />
        )
        return (
            <div className='TransactionsList__container'>
                <h2 className='TransactionsList__title'>
                    October 1, 2019
                </h2>
                <ul className='TransactionsList'>
                    {items}
                </ul>
            </div>
        )
    }
}

export default TransactionsList