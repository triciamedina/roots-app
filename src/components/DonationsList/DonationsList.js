import React, { Component } from 'react'
import './DonationsList.css'
import DonationItem from '../DonationItem/DonationItem'

class DonationsList extends Component {
    render() {
        const { items } = this.props
        // sort by date, descending order
        const sortedItems = items.slice().sort((a, b) => new Date(b.donated_on) - new Date(a.donated_on))
        const list = sortedItems.map(item => 
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
                {list} 
                {/* TODO: Display message if array is empty */}
            </ul>
        )
    }
}

export default DonationsList