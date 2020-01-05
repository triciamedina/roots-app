import React, { Component } from 'react'
import './RoundupsToggle.css'
import RootsContext from '../../contexts/RootsContext'
import ReactTooltip from 'react-tooltip'

class RoundupsToggle extends Component {
    static contextType = RootsContext
    render() {
        return (
            <div className='roundups__toggle-container'>
                <label htmlFor='roundups-toggle' className='toggle'>
                    <span className='roundups-toggle__title'>
                        Automatic round ups
                    </span>
                    <input 
                        type='checkbox'
                        id='roundups-toggle'
                        name='roundups-toggle'
                        onChange={this.context.onAutoRoundupsChange}
                        required 
                    />
                    <span className='slider--round'
                        data-tip='Turn on'
                    >
                    </span>
                </label>
                <ReactTooltip />
            </div>
        )
    }
}

export default RoundupsToggle