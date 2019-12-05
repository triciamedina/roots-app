import React from 'react'
import './Tabs.css'

function Tabs() {
    return (
        <section className="tabs">
                <button className="overview__tab active">
                    Round ups
                </button>
                <button className="overview__tab">
                    Donations
                </button>
        </section>
    )
}

export default Tabs