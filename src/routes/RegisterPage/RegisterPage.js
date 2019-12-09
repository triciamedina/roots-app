import React, { Component } from 'react'
import './RegisterPage.css'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'

class RegisterPage extends Component {
    render() {
        return (
            <>
                <SecondaryNav />
                <main className='register'>
                    <RegisterForm />
                </main>
            </>
        )
    }
}

export default RegisterPage