import React from 'react'
import './DonationItem.css'
import { Formatter } from '../Utils/Utils'

function DonationItem(props) {
    const { donationDate, projectName, projectSchoolName, donationAmount, projectImage } = props
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
                    {Formatter.format(donationAmount)}
                </p>
            </div>
            <div className='DonationItem__project-image'>
                <img 
                    src={projectImage}
                    alt=''
                />
            </div>
        </li>
    )
}

export default DonationItem