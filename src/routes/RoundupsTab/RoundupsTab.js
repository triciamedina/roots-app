import React from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'

function RoundupsTab() {
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

export default RoundupsTab