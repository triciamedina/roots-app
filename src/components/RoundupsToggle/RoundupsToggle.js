import React from 'react'
import './RoundupsToggle.css'

function RoundupsToggle() {
    return (
        <div className='roundups__toggle-container'>
            <label htmlFor='roundups-toggle' className='toggle'>
                <span className='roundups-toggle__title'>
                    Turn on automatic round ups
                </span>
                <input type='checkbox' id='roundups-toggle' name='roundups-toggle' required />
                <span className='slider--round'></span>
            </label>
        </div>
    )
}

export default RoundupsToggle