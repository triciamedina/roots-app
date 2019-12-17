import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Utils.css'
import RootsContext from '../../contexts/RootsContext'

export const Formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export function Button(props) {
    return <button className={props.className} {...props}>{props.children}</button>
}

export function LoginButton(props) {
    return (
        <Link to={`/login`}>
            <button className={props.className} {...props}>Sign in</button>
        </Link>
    )
}

export function RegisterButton(props) {
    return (
        <Link to={'/register'}>
            <button className={props.className} {...props}>Get started</button>
        </Link>
    )
}

export class LogoutButton extends Component {
    static contextType = RootsContext
    handleLogout = () => {
        this.context.handleLogout()
    }
    render() {
        return (
            <Link to={`/`}>
                <button 
                    className={this.props.className} 
                    onClick={this.handleLogout}
                    {...this.props}
                >
                        Log out
                </button>
            </Link>
        )
    }
}