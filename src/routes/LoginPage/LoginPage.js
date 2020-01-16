import React from 'react';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';

function LoginPage() {
    return (
        <>
            <SecondaryNav />
            <main className='LoginPage'>
                <LoginForm />
            </main>
        </>
    )
};

export default LoginPage;