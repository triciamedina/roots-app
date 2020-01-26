import React, { Component } from 'react';
import './RoundupsToggle.css';
import RootsContext from '../../contexts/RootsContext';

class RoundupsToggle extends Component {
    static contextType = RootsContext;

    render() {
        const { autoRoundups } = this.context;

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
                        checked={autoRoundups.isOn}
                        onChange={autoRoundups.isOn 
                            ? this.context.onAutoRoundupsChange
                            : this.context.openToggleModal}
                        required 
                    />
                    <span className='slider--round'>
                    </span>
                </label>
            </div>
        )
    };
};

export default RoundupsToggle;