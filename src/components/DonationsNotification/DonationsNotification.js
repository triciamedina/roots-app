import React, { Component } from 'react';
import './DonationsNotification.css';
import { Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import DonationService from '../../services/donation-service';

class DonationsNotification extends Component {
    static contextType = RootsContext;

    render() {
        const { items } = this.context.donations;
        const amount = DonationService.calculateDonationsTotal(items)

        return (
            <section className='DonationsNotification'>
                <h3 className='DonationsNotification__title'>
                    You’ve given {Formatter.format(amount)} this year!
                </h3>
            </section>
        )
    };
};

export default DonationsNotification;