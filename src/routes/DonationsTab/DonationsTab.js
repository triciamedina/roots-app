import React, { Component } from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'
import DonationsNotification from '../../components/DonationsNotification/DonationsNotification'
import RootsContext from '../../contexts/RootsContext'
import DonationService from '../../services/donation-service'
import DonationItem from '../../components/DonationItem/DonationItem'
import DateList from '../../components/DateList/DateList'

class DonationsTab extends Component {
    static contextType = RootsContext
    renderList() {
        const { items } = this.context.donations
        console.log(items)
        const donations = DonationService.groupDonationsByYear(items)
        const keys = Object.keys(donations)
        for (const key of keys) {
            let title = key
            let donationsByYear = items[key]
            return (
                <>
                    <h2 className='DonationsTab__title'>
                        {title}
                    </h2>
                    <DateList 
                        items={donationsByYear} 
                        listItemType={DonationItem}
                        className='DonationsList'
                    />
                </>
            )
        }
    }
    render() {
        return (
            <>
                <Tabs active='donations'/>
                <section className='DonationsTab'>
                    <DonationsNotification />
                    <div className='DonationsTab__container'>
                        {this.renderList()}
                    </div>
                </section>
            </>
        )
    }
}

export default DonationsTab