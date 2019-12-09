import React from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle'

function RoundupsTab() {
    return (
        <>
            <Tabs active='roundups'/>
            <section className='roundups__tab-container'>
                <RoundupsToggle />
                <div className='roundups__list'>
                    <h2>October 1, 2019</h2>
                    <TransactionsList />
                </div>
            </section>
        </>
    )
}

export default RoundupsTab