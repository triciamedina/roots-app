import React from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import DonationsList from '../../components/DonationsList/DonationsList'
import DonationsNotification from '../../components/DonationsNotification/DonationsNotification'

function DonationsTab() {
    return (
        <>
            <Tabs active='donations'/>
            <section className='DonationsTab'>
                <DonationsNotification />
                <div className='DonationsTab__container'>
                    <h2 className='DonationsTab__title'>2019</h2>
                    <DonationsList />
                </div>
            </section>
        </>
    )
}

export default DonationsTab