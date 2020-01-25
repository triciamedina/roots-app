import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import { LoginButton, LogoutButton, RegisterButton } from '../Utils/Utils';
import './MainNav.css';
import TokenService from '../../services/token-service';

class MainNav extends Component {
    renderPublicMenu() {
        return (
            <header className='MainNav--public'>
                <Logo />
                <nav>
                    <div className='CollapsibleMenu'>
                        <input type='checkbox' id='menu' aria-label='Menu' />
                        <label htmlFor='menu'></label>
                        <ul className='CollapsibleMenu__list'>
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
    };

    renderPrivateMenu() {
        return (
            <header className='MainNav--private'>
                <Logo />
                <nav>
                    <div className='CollapsibleMenu'>
                        <input type='checkbox' id='menu' aria-label='Menu'/>
                        <label htmlFor='menu'></label>
                        <ul className='CollapsibleMenu__list'>
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
    };

    render() {
        return (
            <>
                {TokenService.hasAuthToken()
                            ? this.renderPrivateMenu()
                            : this.renderPublicMenu()
                        } 
            </>
        ) 
    };
};

export default MainNav;