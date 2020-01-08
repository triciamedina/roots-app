import React, { Component } from 'react'
import './DonationsList.css'
import DonationItem from '../DonationItem/DonationItem'
import RootsContext from '../../contexts/RootsContext'

class DonationsList extends Component {
    static contextType = RootsContext
    // TODO: sort array by date
    render() {
        const items = this.context.donations.items.map(item => 
            <DonationItem
                key={item.id}
                donationDate={item.donated_on}
                projectName={item.project_name}
                projectSchoolName={item.school_name}
                donationAmount={item.amount}
                projectImage ={item.image_url}
            />
        )
        return (
            <ul className='DonationsList'>
                {items} 
                {/* TODO: Display message if array is empty */}
            </ul>
        )
    }
}

export default DonationsList