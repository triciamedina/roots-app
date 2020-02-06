import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';
import './Tabs.css';
import PropTypes from 'prop-types';

class Tabs extends Component {
    static propTypes = {
        active: PropTypes.string.isRequired,
    };

    render() {
        const { active } = this.props;

        return (
            <nav 
                className='Tabs' 
                aria-label='Dashboard tabs'
            >
                <Link 
                    to={'/dashboard/roundups'}
                    className='Tabs__container'
                >
                    <Button 
                        className={'Button--tab ' + (active === 'roundups' && 'active')}
                    >
                        <h2 className='Tab__title'>Round ups</h2>
                    </Button>
                </Link>
                <Link 
                    to={'/dashboard/donations'}
                >
                    <Button 
                        className={'Button--tab ' + (active === 'donations' && 'active')}
                    >
                        <h2 className='Tab__title'>Donation history</h2>
                    </Button>
                </Link>
            </nav>
        )
    };
};

export default Tabs;