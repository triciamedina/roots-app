import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'
import './Tabs.css'

class Tabs extends Component {
    render() {
        const { active } = this.props
        return (
            <section className='tabs'>
                    <Link to={'/dashboard/roundups'}>
                        <Button className={'Button--tab ' + (active === 'roundups' && 'active')}>
                            Round ups
                        </Button>
                    </Link>
                    <Link to={'/dashboard/donations'}>
                        <Button className={'Button--tab ' + (active === 'donations' && 'active')}>
                            Donation history
                        </Button>
                    </Link>
            </section>
        )
    }
}

export default Tabs