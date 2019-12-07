import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Utils/Utils'
import './LoginForm.css'

function LoginForm() {
    return (
        <form action='' className='login-form'>
        <h1 className='login-form__title'>Welcome back</h1>
        <section className='login-form__container'>
            <div className='login-form__input'>
                <label htmlFor='email'>
                    <span className='login-form__label'>Email address </span>
                </label>
                <input type='text' id='email' name='email' />
            </div>
            <div className='login-form__input'>
                <label htmlFor='password'>
                    <span className='login-form__label'>Password </span>
                </label>
                <input type='text' id='password' name='password' />
            </div>
            <div className='login-form__submit'>
                <Link to={'/dashboard'}>
                    <Button className='Button--contained-large' type='submit'>
                        Next
                    </Button>
                </Link>
            </div>
        </section>
        <section className='login-form__secondary'>
            <p>Don’t have an account?</p>
            <p><a href='#' className='text-link'>Get started</a></p>
        </section>
    </form>
    )
}

export default LoginForm