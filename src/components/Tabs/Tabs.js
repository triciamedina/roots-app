import React from 'react'
import { Link } from 'react-router-dom'
import './Tabs.css'

function Tabs() {
    return (
        <section className="tabs">
                <Link to={'/dashboard/roundups'}>
                    <button className="overview__tab active">
                        Round ups
                    </button>
                </Link>
                <Link to={'/dashboard/roundups'}>
                    <button className="overview__tab">
                        Donations
                    </button>
                </Link>
        </section>
    )
}

export default Tabs