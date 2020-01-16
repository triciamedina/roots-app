import React, { Component } from 'react';
import './DonationsNotification.css';
import { Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import DonationService from '../../services/donation-service';

class DonationsNotification extends Component {
    static contextType = RootsContext;

    render() {
        const { items } = this.context.donations;

        return (
            <div className='DonationsNotification'>
                <p className='DonationsNotification__title'>
                    You’ve given {Formatter.format(DonationService.calculateDonationsTotal(items))} this year!
                </p>
            </div>
        )
    };
};

export default DonationsNotification;