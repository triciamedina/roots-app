import React from 'react'
import './DonationsNotification.css'
import { Formatter } from '../Utils/Utils'

function DonationsNotification(props) {
    return (
        <div className='DonationsNotification'>
            <p className='DonationsNotification__title'>
                You’ve given {Formatter.format(props.donationsTotal)} this year!
            </p>
        </div>
    )
}

export default DonationsNotification