import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'
import TokenService from '../../services/token-service'

class LogoutButton extends Component {
    handleLogout = () => {
        TokenService.clearAuthToken()
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