import React from 'react'
import './DonationsNotification.css'

function DonationsNotification(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        })
    return (
        <div className='DonationsNotification'>
            <p className='DonationsNotification__title'>
                You’ve given {formatter.format(props.donationsTotal)} this year!
            </p>
        </div>
    )
}

export default DonationsNotification