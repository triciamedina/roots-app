import React from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import DonationsList from '../../components/DonationsList/DonationsList'
import DonationsNotification from '../../components/DonationsNotification/DonationsNotification'
import STORE from '../../store'

function DonationsTab() {
    return (
        <>
            <Tabs active='donations'/>
            <section className='donations__tab-container'>
                <DonationsNotification donationsTotal={STORE.donationsTotal}/>
                <div className='donations__list'>
                    <h2>2019</h2>
                    <DonationsList />
                </div>
            </section>
        </>
    )
}

export default DonationsTab