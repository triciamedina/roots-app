import React, { Component } from 'react';
import './RoundupsToggle.css';
import RootsContext from '../../contexts/RootsContext';

class RoundupsToggle extends Component {
    static contextType = RootsContext;

    render() {
        const { autoRoundups } = this.context;

        return (
            <section className='RoundupsToggle__container'>
                <label htmlFor='roundups-toggle' className='toggle'>
                    <h3 className='RoundupsToggle__title'>
                        Automatic round ups
                    </h3>
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
            </section>
        )
    };
};

export default RoundupsToggle;