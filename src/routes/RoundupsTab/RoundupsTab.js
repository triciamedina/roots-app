import React from 'react'
import './RoundupsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import TransactionsList from '../../components/TransactionsList/TransactionsList'

function RoundupsTab() {
    return (
        <>
            <Tabs active='roundups'/>
            <section className='roundups__tab-container'>
                <div className='roundups__toggle-container'>
                    <label htmlFor='roundups-toggle' className='toggle'>
                        <span className='roundups-toggle__title'>
                            Turn on automatic round ups
                        </span>
                        <input type='checkbox' id='roundups-toggle' name='roundups-toggle' required />
                        <span className='slider--round'></span>
                    </label>
                </div>
                <div className='roundups__list'>
                    <h2>October 1, 2019</h2>
                    <TransactionsList />
                </div>
            </section>
        </>
    )
}

export default RoundupsTab