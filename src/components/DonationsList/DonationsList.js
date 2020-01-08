import React, { Component } from 'react'
import './DonationsList.css'
import DonationItem from '../DonationItem/DonationItem'
import RootsContext from '../../contexts/RootsContext'

class DonationsList extends Component {
    static contextType = RootsContext
    render() {
        const sortedItems = this.context.donations.items.slice().sort((a, b) => new Date(b.donated_on) - new Date(a.donated_on))
        const items = sortedItems.map(item => 
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