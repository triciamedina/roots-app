import React, { Component } from 'react'
import './SecondaryNav.css'
import { withRouter } from 'react-router'

class SecondaryNav extends Component {
    handleGoback = () => {
        const { history } = this.props
        history.goBack()
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
    render() {
        return (
            <header className='header--sticky'>
                <nav>
                    {this.renderBackButton()}
                </nav>
            </header>
        ) 
    }
}

export default withRouter(SecondaryNav)