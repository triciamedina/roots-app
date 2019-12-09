import React from 'react'
import './DonationsList.css'

function DonationsList() {
    return (
        <ul className='donations-list'>
            <li>
                <div className='donations__container'>
                    <p className='donations__date'>August 5, 2019</p>
                    <p className='donations__project-name'>Once Upon a Book…</p>
                    <p className='donations__project-subtitle'>Grant Elementary</p>
                    <p className='donations__project-amount'><i className="fas fa-check"></i> $23.58</p>
                </div>
                <div className='donations__project-image'>
                    <img src='https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder' />
                </div>
            </li>
            <li>
                <div className='donations__container'>
                    <p className='donations__date'>April 23, 2019</p>
                    <p className='donations__project-name'>Manga Madness #2</p>
                    <p className='donations__project-subtitle'>Lincoln Elementary</p>
                    <p className='donations__project-amount'><i className="fas fa-check"></i> $50.00</p>
                </div>
                <div className='donations__project-image'>
                    <img src='https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder' />
                </div>
            </li>
            <li>
                <div className='donations__container'>
                    <p className='donations__date'>February 14, 2019</p>
                    <p className='donations__project-name'>We Stay #TECHReady</p>
                    <p className='donations__project-subtitle'>Park Elementary</p>
                    <p className='donations__project-amount'><i className='fas fa-check'></i> $50.00</p>
                </div>
                <div className='donations__project-image'>
                    <img src='https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder' />
                </div>
            </li>
            <li>
                <div className='donations__container'>
                    <p className='donations__date'>February 1, 2019</p>
                    <p className='donations__project-name'>A Productive Learning Environment: Essential Items and Cleaning Supplies</p>
                    <p className='donations__project-subtitle'>Mission Elementary</p>
                    <p className='donations__project-amount'><i className='fas fa-check'></i> $26.42</p>
                </div>
                <div className='donations__project-image'>
                    <img src='https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder' />
                </div>
            </li>
        </ul>
    )
}

export default DonationsList