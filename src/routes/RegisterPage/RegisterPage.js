import React from 'react'
import './RegisterPage.css'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'

function RegisterPage() {
    return (
        <>
            <SecondaryNav />
            <main className='RegisterPage'>
                <RegisterForm />
            </main>
        </>
    )
}

export default RegisterPage