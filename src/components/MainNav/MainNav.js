import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import { Button } from '../Utils/Utils'
import { Link } from 'react-router-dom'
import './MainNav.css'

class MainNav extends Component {
    
    renderPublicCollapsibleMenu() {
        return (
            <div className="PublicCollapsibleMenu">
                <input type="checkbox" id="menu" />
                <label htmlFor="menu"></label>
                <ul className="PublicCollapsibleMenu__list">
                    <li>
                        <Link to={`/login`}>
                            <Button className="Button--text-large">Sign in</Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="Button--contained-large">Get started</Button>
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
                        <Link to={`/login`}>
                            <Button className="Button--text-small">Sign in</Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="Button--contained-small">Get started</Button>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <header className="MainNav--sticky">
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