import React, { Component } from 'react'
import moment from 'moment'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionItem from '../../components/TransactionItem/TransactionItem'
import DateList from '../../components/DateList/DateList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'
import RootsContext from '../../contexts/RootsContext'
import TransactionService from '../../services/transaction-service'

class RoundupsTab extends Component {
    static contextType = RootsContext
    renderList() {
        const { transactions } = this.context
        const roundups = TransactionService.groupTransactionsByDay(transactions.items)
        
        const keys = Object.keys(roundups).sort((a, b) => {
            return b - a
        })

        return keys.map((key, index) => {
            let title = key
            let transactionsByDay = roundups[key]
            return (
                <React.Fragment key={title}>
                    <h2 className='TransactionsList__title'>
                            {moment(title, 'YYYY-MM_DD').format('MMMM Do, YYYY')}
                        </h2>
                    <DateList 
                        key={index}
                        id={index}
                        items={transactionsByDay} 
                        listItemType={TransactionItem}
                        className='TransactionsList'
                    />
                </React.Fragment>
            )
        })
    }
    render() {
        return (
            <>
                <Tabs active='roundups'/>
                <section className='RoundupsTab'>
                    <RoundupsToggle />
                    <div className='TransactionsList__container'>
                        {this.renderList()}
                    </div>
                </section>
            </>
        )
    }
}

export default RoundupsTab