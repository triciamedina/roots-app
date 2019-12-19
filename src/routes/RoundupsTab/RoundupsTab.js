import React, { Component } from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'
import RootsContext from '../../contexts/RootsContext'
import STORE from '../../store'

class RoundupsTab extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const transactions = STORE.transactions
        this.context.updateTransactions(transactions)
    }
    render() {
        return (
            <>
                <Tabs active='roundups'/>
                <section className='RoundupsTab'>
                    <RoundupsToggle />
                    <TransactionsList />
                </section>
            </>
        )
    }
}

export default RoundupsTab