import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import moment from 'moment'
import './DonationItem.css'
import { Formatter } from '../Utils/Utils'

function DonationItem(props) {
    const { donationDate, projectName, projectSchoolName, donationAmount, projectImage } = props
    // TODO: add link to view project in donorschoose.org
    return (
        <li className='DonationItem'>
            <div className='DonationItem__container'>
                <p className='DonationItem__date'>
                    {/* {new Date(donationDate).toLocaleString()} */}
                    {moment(donationDate).format('MMMM Do, YYYY')}
                </p>
                <p className='DonationItem__project-name'>
                    {ReactHtmlParser(projectName)}
                </p>
                <p className='DonationItem__project-school'>
                    {ReactHtmlParser(projectSchoolName)}
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