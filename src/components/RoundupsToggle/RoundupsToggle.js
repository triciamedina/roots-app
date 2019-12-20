import React, { Component } from 'react'
import './RoundupsToggle.css'
import RootsContext from '../../contexts/RootsContext'

class RoundupsToggle extends Component {
    static contextType = RootsContext
    render() {
        return (
            <div className='roundups__toggle-container'>
                <label htmlFor='roundups-toggle' className='toggle'>
                    <span className='roundups-toggle__title'>
                        Turn on automatic round ups
                    </span>
                    <input 
                        type='checkbox'
                        id='roundups-toggle'
                        name='roundups-toggle'
                        onChange={this.context.onAutoRoundupsChange}
                        required 
                    />
                    <span className='slider--round'></span>
                </label>
            </div>
        )
    }
}

export default RoundupsToggle