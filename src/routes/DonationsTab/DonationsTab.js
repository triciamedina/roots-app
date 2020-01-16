import React, { Component } from 'react';
import './DonationsTab.css';
import Tabs from '../../components/Tabs/Tabs';
import DonationsNotification from '../../components/DonationsNotification/DonationsNotification';
import RootsContext from '../../contexts/RootsContext';
import DonationService from '../../services/donation-service';
import DonationItem from '../../components/DonationItem/DonationItem';
import DateList from '../../components/DateList/DateList';

class DonationsTab extends Component {
    static contextType = RootsContext;

    renderList() {
        const { items } = this.context.donations;

        const donations = DonationService.groupDonationsByYear(items);

        const keys = Object.keys(donations).sort((a, b) => {
            return b - a
        });

        return keys.map((key, index) => {
            let title = key;

            let donationsByYear = donations[key];

            return (
                <React.Fragment key={title}>
                    <h2 className='DonationsTab__title'>
                        {title}
                    </h2>
                    <DateList 
                        key={index}
                        id={index}
                        items={donationsByYear} 
                        listItemType={DonationItem}
                        className='DonationsList'
                    />
                </React.Fragment>
            )
        })
    };

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
    };
};

export default DonationsTab;