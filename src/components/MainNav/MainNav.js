import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './MainNav.css'
import Hamburger from '../Hamburger/Hamburger'

class MainNav extends Component {
    renderPublicMenu() {
        return (
            <div className="PublicMenu">
                <ul className="PublicMenu__list">
                    <li>
                        <button className="text-button--small">Sign in</button>
                    </li>
                    <li>
                        <button className="contained-button--small">Get started</button>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <header className="MainNav--sticky">
                <Logo />
                <nav>
                    <Hamburger />
                    {this.renderPublicMenu()}
                </nav>
            </header>
        ) 
    }
}

export default MainNav