import React, { Component } from 'react'
import './DonationsList.css'
import DonationItem from '../DonationItem/DonationItem'
import RootsContext from '../../contexts/RootsContext'

class DonationsList extends Component {
    static contextType = RootsContext
    render() {
        const items = this.context.donations.items.map(item => 
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
}

export default DonationsList