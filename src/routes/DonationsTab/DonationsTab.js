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
            <section className='DonationsTab'>
                <DonationsNotification donationsTotal={STORE.donationsTotal}/>
                <div className='DonationsTab__container'>
                    <h2 className='DonationsTab__title'>2019</h2>
                    <DonationsList />
                </div>
            </section>
        </>
    )
}

export default DonationsTab