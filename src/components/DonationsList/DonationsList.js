import React from 'react'
import './DonationsList.css'
import DonationItem from '../DonationItem/DonationItem'
import STORE from '../../store'

function DonationsList() {
    const items = STORE.donations.map(item => 
        <DonationItem
            key={item.id}
            donationDate={item.donationDate}
            projectName={item.projectName}
            projectSchoolName={item.projectSchoolName}
            donationAmount={item.donationAmount}
            projectImage ={item.projectImage}
        />
    )
    return (
        <ul className='DonationsList'>
            {items}
        </ul>
    )
}

export default DonationsList