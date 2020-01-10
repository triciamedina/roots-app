import React, { Component } from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionItem from '../../components/TransactionItem/TransactionItem'
import DateList from '../../components/DateList/DateList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'
import RootsContext from '../../contexts/RootsContext'

class RoundupsTab extends Component {
    static contextType = RootsContext
    renderList() {
        const { transactions } = this.context
        return (
            <>
                <h2 className='TransactionsList__title'>
                    October 1, 2019
                </h2>
                <DateList
                    items={transactions.items}
                    listItemType={TransactionItem}
                    className='TransactionsList'
                />
            </>
        )
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