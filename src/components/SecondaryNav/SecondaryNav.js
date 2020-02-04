import React, { Component } from 'react'
import './SecondaryNav.css'
import { withRouter } from 'react-router'
import RootsContext from '../../contexts/RootsContext';
import { Button } from '../Utils/Utils';
import { ChevronLeft, X } from 'react-feather';

class SecondaryNav extends Component {
    static contextType = RootsContext;

    handleGoback = () => {
        const { history, location } = this.props;

        if (location.pathname === '/projects') {
            this.context.handleClearSearch()
        };

        history.goBack();
    };

    handleClose = () => {
        const { history } = this.props;

        this.context.handleClearSearch();

        history.push('/dashboard');
    };

    handleSkip = () => {
        const { history } = this.props;

        history.push('/dashboard');
    };

    renderBackButton() {
        return (
            <div className='left-arrow-icon'>
                <button className='back-button' onClick={this.handleGoback} aria-label='Back'>
                    <ChevronLeft size='40' color='black' />
                </button>
            </div>
        )
    };

    renderCloseButton() {
        return (
            <div className='times-icon'>
                <button className='close-button' onClick={this.handleClose} aria-label='Close'>
                    <X size='35' color='black' />
                </button>
            </div>
        )
    };

    renderSkipButton() {
        return (
            <div className='skip-button'>
                <Button className='Button--text-xsmall' onClick={this.handleSkip}>
                    Skip
                </Button>
            </div>
        )
    };

    render() {
        const { projects: { showModal }, accountSetup: { isSuccessful }} = this.context
        const { location } = this.props;

        if (showModal) {
            return null
        };

        return (
            <header className='SecondaryNav'>
                <nav>
                    {!location.pathname.includes('/account-setup') && this.renderBackButton()}
                    {location.pathname.includes('/projects') && this.renderCloseButton()}
                    {(location.pathname.includes('/account-setup') && !isSuccessful) 
                        && this.renderSkipButton()}
                </nav>
            </header>
        ) 
    };
};

export default withRouter(SecondaryNav);