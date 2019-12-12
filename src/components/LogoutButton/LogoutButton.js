import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import RootsContext from '../../contexts/RootsContext'

class LogoutButton extends Component {
    static contextType = RootsContext
    handleLogout = () => {
        TokenService.clearAuthToken()
        this.context.handleLogout()
    }
    render() {
        return (
            <Link to={`/`}>
                <Button 
                    className={this.props.className}
                    onClick={this.handleLogout}>
                        Log out
                </Button>
            </Link>
        )
    }
}

export default LogoutButton