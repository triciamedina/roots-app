import React, { Component } from 'react';
import './RoundupsToggle.css';
import RootsContext from '../../contexts/RootsContext';
import ReactTooltip from 'react-tooltip';

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
                        defaultChecked={autoRoundups.isOn}
                        onChange={this.context.onAutoRoundupsChange}
                        required 
                    />
                    <span className='slider--round'
                        data-tip={autoRoundups.isOn ? 'Turn off' : 'Turn on'}
                    >
                    </span>
                </label>
                <ReactTooltip />
            </div>
        )
    };
};

export default RoundupsToggle;