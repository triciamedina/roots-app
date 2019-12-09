import React, { Component } from 'react'
import './SecondaryNav.css'
import { withRouter } from 'react-router'

class SecondaryNav extends Component {
    handleGoback = () => {
        const { history } = this.props
        history.goBack()
    }
    handleClose = () => {
        const { history } = this.props
        history.push('/dashboard')
    }
    renderBackButton() {
        return (
            <div className='left-arrow-icon'>
                <button className='back-button' onClick={this.handleGoback}>
                    <i className='fas fa-chevron-left'></i>
                </button>
            </div>
        )
    }
    renderCloseButton() {
        return (
            <div className='times-icon'>
                <button className='close-button' onClick={this.handleClose}>
                    <i className='fas fa-times'></i>
                </button>
            </div>
        )
    }
    render() {
        const { location } = this.props
        return (
            <header className='header--sticky'>
                <nav>
                    {this.renderBackButton()}
                    {location.pathname === '/projects' && this.renderCloseButton()}
                </nav>
            </header>
        ) 
    }
}

export default withRouter(SecondaryNav)