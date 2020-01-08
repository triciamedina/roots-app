import React, { Component } from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import DonationsList from '../../components/DonationsList/DonationsList'
import DonationsNotification from '../../components/DonationsNotification/DonationsNotification'
import RootsContext from '../../contexts/RootsContext'
import STORE from '../../store'

class DonationsTab extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const { donationsTotal } = STORE
        this.context.updateDonations(donationsTotal)
    }
    render() {
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
}

export default DonationsTab