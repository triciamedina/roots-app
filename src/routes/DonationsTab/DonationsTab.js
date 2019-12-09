import React from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import DonationsList from '../../components/DonationsList/DonationsList'

function DonationsTab() {
    return (
        <>
            <Tabs active='donations'/>
            <section className='donations__tab-container'>
                <div className='donations__notification-container'>
                    <p className='donations__notification-title'>You’ve given $200 this year!</p>
                </div>
                <div className='donations__list'>
                    <h2>2019</h2>
                    <DonationsList />
                </div>
            </section>
        </>
    )
}

export default DonationsTab