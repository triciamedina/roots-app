import React from 'react'
import './DonationsTab.css'
import Tabs from '../../components/Tabs/Tabs'

function DonationsTab() {
    return (
        <>
            <Tabs active='donations'/>
            <section className="donations__tab-container">
                <div className="donations__notification-container">
                    <p className="donations__notification-title">You’ve given $200 this year!</p>
                </div>
                <div className="donations__list">
                    <h2>2019</h2>
                    <ul className="donations-list">
                        <li>
                            <div className="donations__container">
                                <p className="donations__date">August 5, 2019</p>
                                <p className="donations__project-name">Once Upon a Book…</p>
                                <p className="donations__project-subtitle">Grant Elementary</p>
                                <p className="donations__project-amount"><i className="fas fa-check"></i> $23.58</p>
                            </div>
                            <div className="donations__project-image">
                                <img src="https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder" />
                            </div>
                        </li>
                        <li>
                            <div className="donations__container">
                                <p className="donations__date">April 23, 2019</p>
                                <p className="donations__project-name">Manga Madness #2</p>
                                <p className="donations__project-subtitle">Lincoln Elementary</p>
                                <p className="donations__project-amount"><i className="fas fa-check"></i> $50.00</p>
                            </div>
                            <div className="donations__project-image">
                                <img src="https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder" />
                            </div>
                        </li>
                        <li>
                            <div className="donations__container">
                                <p className="donations__date">February 14, 2019</p>
                                <p className="donations__project-name">We Stay #TECHReady</p>
                                <p className="donations__project-subtitle">Park Elementary</p>
                                <p className="donations__project-amount"><i className="fas fa-check"></i> $50.00</p>
                            </div>
                            <div className="donations__project-image">
                                <img src="https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder" />
                            </div>
                        </li>
                        <li>
                            <div className="donations__container">
                                <p className="donations__date">February 1, 2019</p>
                                <p className="donations__project-name">A Productive Learning Environment: Essential Items and Cleaning Supplies</p>
                                <p className="donations__project-subtitle">Mission Elementary</p>
                                <p className="donations__project-amount"><i className="fas fa-check"></i> $26.42</p>
                            </div>
                            <div className="donations__project-image">
                                <img src="https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder" />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default DonationsTab