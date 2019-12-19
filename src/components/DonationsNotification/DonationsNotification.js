import React, { Component } from 'react'
import './DonationsNotification.css'
import { Formatter } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'

class DonationsNotification extends Component {
    static contextType = RootsContext
    render() {
        const { total } = this.context.donations
        return (
            <div className='DonationsNotification'>
                <p className='DonationsNotification__title'>
                    You’ve given {Formatter.format(total)} this year!
                </p>
            </div>
        )
    }
}

export default DonationsNotification