import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import { Button } from '../Utils/Utils'
import { Link } from 'react-router-dom'
import RegisterButton from '../RegisterButton/RegisterButton'
import LoginButton from '../LoginButton/LoginButton'
import './MainNav.css'

class MainNav extends Component {
    renderPublicCollapsibleMenu() {
        return (
            <div className='PublicCollapsibleMenu'>
                <input type='checkbox' id='menu' />
                <label htmlFor='menu'></label>
                <ul className='PublicCollapsibleMenu__list'>
                    <li>
                        <LoginButton className='Button--text-large' />
                    </li>
                    <li>
                        <RegisterButton className='Button--contained-large' />
                    </li>
                </ul>
            </div>
        )
    }
    renderPublicMenu() {
        return (
            <div className='PublicMenu'>
                <ul className='PublicMenu__list'>
                    <li>
                        <LoginButton className='Button--text-small' />
                    </li>
                    <li>
                        <RegisterButton className='Button--contained-small' />
                    </li>
                </ul>
            </div>
        )
    }
    render() {
        return (
            <header className='MainNav--sticky'>
                {/* TODO: use basic token to manage logged out/logged in state */}
                {/* Logo component public/private nav to conditionally render based on logged in/logged out state*/}
                <Logo />
                <nav>
                    {this.renderPublicCollapsibleMenu()}
                    {this.renderPublicMenu()}
                </nav>
            </header>
        ) 
    }
}

export default MainNav