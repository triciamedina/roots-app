import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './MainNav.css'

class MainNav extends Component {
    render() {
        return (
            <header className="MainNav--sticky">
                <Logo />
                {/* <Hamburger />
                <Menu /> */}
            </header>
        ) 
    }
}

export default MainNav