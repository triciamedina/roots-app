import React, { Component } from 'react'
import './SecondaryNav.css'
import { withRouter } from 'react-router'
import Times from '../../img/times-solid.svg'
import LeftArrow from '../../img/chevron-left-solid.svg'

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
                    <img src={LeftArrow} />
                </button>
            </div>
        )
    }
    renderCloseButton() {
        return (
            <div className='times-icon'>
                <button className='close-button' onClick={this.handleClose}>
                    <img src={Times} />
                </button>
            </div>
        )
    }
    render() {
        const { location } = this.props
        return (
            <header className='SecondaryNav'>
                <nav>
                    {this.renderBackButton()}
                    {location.pathname === '/projects' && this.renderCloseButton()}
                </nav>
            </header>
        ) 
    }
}

export default withRouter(SecondaryNav)