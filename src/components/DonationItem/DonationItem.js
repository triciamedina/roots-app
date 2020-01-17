import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import './DonationItem.css';
import { Formatter } from '../Utils/Utils';

function DonationItem(props) {
    const { donated_on, project_name, school_name, amount, image_url } = props;
    
    return (
        <li className='DonationItem'>
            <div className='DonationItem__container'>
                <p className='DonationItem__date'>
                    {moment(donated_on).format('MMMM Do, YYYY')}
                </p>
                <p className='DonationItem__project-name'>
                    {ReactHtmlParser(project_name)}
                </p>
                <p className='DonationItem__project-school'>
                    {ReactHtmlParser(school_name)}
                </p>
                <p className='DonationItem__project-amount'>
                    <i className="fas fa-check"></i>
                    {Formatter.format(amount)}
                </p>
            </div>
            <div className='DonationItem__project-image'>
                <img 
                    src={image_url}
                    alt=''
                />
            </div>
        </li>
    )
};

export default DonationItem;