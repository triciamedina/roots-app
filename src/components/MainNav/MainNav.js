import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import RegisterButton from '../RegisterButton/RegisterButton'
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import './MainNav.css'
import TokenService from '../../services/token-service'

class MainNav extends Component {
    renderPublicMenu() {
        return (
            <header className='MainNav--public'>
                <Logo />
                <nav>
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
                </nav>
            </header>
        )
    }
    renderPrivateMenu() {
        return (
            <header className='MainNav--private'>
                <nav>
                    <div className='PublicCollapsibleMenu'>
                        <input type='checkbox' id='menu' />
                        <label htmlFor='menu'></label>
                        <ul className='PublicCollapsibleMenu__list'>
                            <li>
                                <LogoutButton className='Button--contained-large' />
                            </li>
                        </ul>
                    </div>
                    <div className='PrivateMenu'>
                        <ul className='PrivateMenu__list'>
                            <li>
                                <LogoutButton className='Button--contained-small' />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
    render() {
        return (
            <>
                {TokenService.hasAuthToken()
                            ? this.renderPrivateMenu()
                            : this.renderPublicMenu()
                        } 
            </>
        ) 
    }
}

export default MainNav