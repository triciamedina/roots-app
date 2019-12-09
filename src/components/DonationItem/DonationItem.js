import React from 'react'
import './DonationItem.css'

function DonationItem(props) {
    const { 
        donationDate, 
        projectName, 
        projectSchoolName, 
        donationAmount, 
        projectImage } = props
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        })
    return (
        <li>
            <div className='donations__container'>
                <p className='donations__date'>
                    {donationDate}
                </p>
                <p className='donations__project-name'>
                    {projectName}
                </p>
                <p className='donations__project-subtitle'>
                    {projectSchoolName}
                </p>
                <p className='donations__project-amount'>
                    <i className="fas fa-check"></i>
                    {formatter.format(donationAmount)}
                </p>
            </div>
            <div className='donations__project-image'>
                <img 
                    src={projectImage}
                />
            </div>
        </li>
    )
}

export default DonationItem