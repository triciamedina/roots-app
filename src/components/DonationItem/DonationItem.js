import React from 'react'
import './DonationItem.css'

function DonationItem(props) {
    const { donationDate, projectName, projectSchoolName, donationAmount, projectImage } = props
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        })
    return (
        <li className='DonationItem'>
            <div className='DonationItem__container'>
                <p className='DonationItem__date'>
                    {donationDate}
                </p>
                <p className='DonationItem__project-name'>
                    {projectName}
                </p>
                <p className='DonationItem__project-school'>
                    {projectSchoolName}
                </p>
                <p className='DonationItem__project-amount'>
                    <i className="fas fa-check"></i>
                    {formatter.format(donationAmount)}
                </p>
            </div>
            <div className='DonationItem__project-image'>
                <img 
                    src={projectImage}
                />
            </div>
        </li>
    )
}

export default DonationItem