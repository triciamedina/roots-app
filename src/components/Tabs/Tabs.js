import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';
import './Tabs.css';

class Tabs extends Component {
    render() {
        const { active } = this.props;

        return (
            <nav 
                className='Tabs' 
                aria-label='Dashboard tabs'
                role='tablist' 
                aria-owns='tab-1 tab-2'
            >
                <Link to={'/dashboard/roundups'} className='Tabs__container'>
                    <Button 
                        className={'Button--tab ' + (active === 'roundups' && 'active')}
                        role='tab'
                        aria-selected={active === 'roundups'}
                        aria-controls='panel-1' 
                        id='tab-1'
                        tabIndex={active === 'roundups' ? '0' : '-1'}
                    >
                        <h2 className='Tab__title'>Round ups</h2>
                    </Button>
                </Link>
                <Link to={'/dashboard/donations'}>
                    <Button 
                        className={'Button--tab ' + (active === 'donations' && 'active')}
                        role='tab'
                        aria-selected={active === 'donations'}
                        aria-controls='panel-2' 
                        id='tab-2'
                        tabIndex={active === 'donations' ? '0' : '-1'}
                    >
                        <h2 className='Tab__title'>Donation history</h2>
                    </Button>
                </Link>
            </nav>
        )
    };
};

export default Tabs;