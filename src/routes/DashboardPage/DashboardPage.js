import React from 'react'
import './DashboardPage.css'
import { Button } from '../../components/Utils/Utils'

function DashboardPage() {
    return (
        <main className="overview">
            <section className="wallet__container">
                <p className="wallet__title">Your total balance</p>
                <h1 className="wallet__balance">$30.00</h1>
                <p className="wallet__subtitle">+ $0.45 today</p>
                <Button className="Button--contained-small Dashboard__give">Give</Button>
            </section>

            <section className="tabs">
                <button className="overview__tab active">Round ups</button>
                <button className="overview__tab">Donations</button>
            </section>

            
            <section className="roundups__tab-container">
                <div className="roundups__toggle-container">
                    <label htmlFor="roundups-toggle" className="toggle">
                        <span className="roundups-toggle__title">Turn on automatic round ups</span>
                        <input type="checkbox" id="roundups-toggle" name="roundups-toggle" required />
                        <span className="slider--round"></span>
                    </label>
                </div>
                <div className="roundups__list">
                    <h2>October 1, 2019</h2>
                    <ul className="transactions-list">
                        <li>
                            <div className="transactions__container">
                                <p className="transactions__item-name">Starbucks</p>
                                <p className="transactions__item-subtitle">$24.89</p>
                            </div>
                            <label htmlFor="transactions-1" className="transactions-toggle">
                                <span className="transactions-toggle__title">$0.11</span>
                                <input type="checkbox" id="transactions-1" name="transactions-1" required />
                                <span className="circle"></span>
                            </label>
                        </li>
                        <li>
                            <div className="transactions__container">
                                <p className="transactions__item-name">Ritual</p>
                                <p className="transactions__item-subtitle">$36.11</p>
                            </div>
                            <label htmlFor="transactions-2" className="transactions-toggle">
                                <span className="transactions-toggle__title">$0.89</span>
                                <input type="checkbox" id="transactions-2" name="transactions-2" required />
                                <span className="circle"></span>
                            </label>
                        </li>
                        <li>
                            <div className="transactions__container">
                                <p className="transactions__item-name">Netflix</p>
                                <p className="transactions__item-subtitle">$5.60</p>
                            </div>
                            <label htmlFor="transactions-3" className="transactions-toggle">
                                <span className="transactions-toggle__title">$0.40</span>
                                <input type="checkbox" id="transactions-3" name="transactions-3" required />
                                <span className="circle"></span>
                            </label>
                        </li>
                        <li>
                            <div className="transactions__container">
                                <p className="transactions__item-name">Clipper</p>
                                <p className="transactions__item-subtitle">1234</p>
                            </div>
                            <label htmlFor="transactions-4" className="transactions-toggle">
                                <span className="transactions-toggle__title">$0.40</span>
                                <input type="checkbox" id="transactions-4" name="transactions-4" required />
                                <span className="circle"></span>
                            </label>
                        </li>
                        <li>
                            <div className="transactions__container">
                                <p className="transactions__item-name">PGANDE WEB ONLINE</p>
                                <p className="transactions__item-subtitle">1234</p>
                            </div>
                            <label htmlFor="transactions-5" className="transactions-toggle">
                                <span className="transactions-toggle__title">$0.40</span>
                                <input type="checkbox" id="transactions-5" name="transactions-5" required />
                                <span className="circle"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </section>
         </main>
    )
}

export default DashboardPage