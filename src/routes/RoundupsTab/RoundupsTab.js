import React, { Component } from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'

class RoundupsTab extends Component {
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