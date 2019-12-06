import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'
import './Tabs.css'

function Tabs() {
    return (
        <section className="tabs">
                <Link to={'/dashboard/roundups'}>
                    <Button className="Button--tab active">
                        Round ups
                    </Button>
                </Link>
                <Link to={'/dashboard/donations'}>
                    <Button className="Button--tab">
                        Donations
                    </Button>
                </Link>
        </section>
    )
}

export default Tabs