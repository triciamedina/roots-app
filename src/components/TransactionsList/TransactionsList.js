import React, { Component } from 'react'
import './TransactionsList.css'
import STORE from '../../store'
import TransactionItem from '../TransactionItem/TransactionItem'

// TODO: refactor so componentDidMount makes a request to get data and then store in state
// Will need an onChange property that updates state (and eventually posts to backend)

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