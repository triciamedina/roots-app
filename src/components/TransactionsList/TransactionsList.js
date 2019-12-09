import React, { Component } from 'react'
import './TransactionsList.css'
import STORE from '../../store'
import TransactionItem from '../TransactionItem/TransactionItem'

class TransactionsList extends Component {
    render() {
        const items = STORE.transactions.map(item => 
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
            <ul className='transactions-list'>
                {items}
            </ul>
        )
    }
}

export default TransactionsList