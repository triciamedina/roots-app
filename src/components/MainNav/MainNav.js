import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './MainNav.css'

class MainNav extends Component {
    renderPublicCollapsibleMenu() {
        return (
            <div className="PublicCollapsibleMenu">
                <input type="checkbox" id="menu" />
                <label htmlFor="menu"></label>
                <ul className="PublicCollapsibleMenu__list">
                    <li>
                        <button className="text-button--small">Sign in</button>
                    </li>
                    <li>
                        <button className="contained-button--large">Get started</button>
                    </li>
                </ul>
            </div>
        )
    }

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
                {/* Logo component only shows in Public menu */}
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