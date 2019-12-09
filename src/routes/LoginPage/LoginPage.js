import React, { Component } from 'react'
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'

class LoginPage extends Component {
    render() {
        return (
            <>
                <SecondaryNav />
                <main className='login'>
                    <LoginForm />
                </main>
            </>
        )
    }
}

export default LoginPage