import React, { Component } from 'react'
import './SecondaryNav.css'
import { withRouter } from 'react-router'
import Times from '../../img/times-solid.svg'
import LeftArrow from '../../img/chevron-left-solid.svg'
import RootsContext from '../../contexts/RootsContext'

class SecondaryNav extends Component {
    static contextType = RootsContext
    handleGoback = () => {
        const { history, location } = this.props
        if (location.pathname === '/projects') {
            this.context.handleClearSearch()
        }
        history.goBack()
    }
    handleClose = () => {
        const { history } = this.props
        this.context.handleClearSearch()
        history.push('/dashboard')
    }
    renderBackButton() {
        return (
            <div className='left-arrow-icon'>
                <button className='back-button' onClick={this.handleGoback}>
                    <img src={LeftArrow} alt=''/>
                </button>
            </div>
        )
    }
    renderCloseButton() {
        return (
            <div className='times-icon'>
                <button className='close-button' onClick={this.handleClose}>
                    <img src={Times} alt=''/>
                </button>
            </div>
        )
    }
    render() {
        if (this.context.projects.showModal) {
            return null
        }
        const { location } = this.props
        return (
            <header className='SecondaryNav'>
                <nav>
                    {this.renderBackButton()}
                    {location.pathname.includes('/projects') && this.renderCloseButton()}
                </nav>
            </header>
        ) 
    }
}

export default withRouter(SecondaryNav)