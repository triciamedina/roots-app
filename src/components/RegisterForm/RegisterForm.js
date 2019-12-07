import React, { Component } from 'react'
import './RegisterForm.css'
import { Button } from '../Utils/Utils'

class RegisterForm extends Component {
    renderStepOne() {
        return (
            <>
                <div className='register-form__input'>
                    <label htmlFor='email'>
                        <span className='register-form__label'>Email address </span>
                    </label>
                    <input type='text' id='email' name='email' />
                </div>
                <div className='register-form__input'>
                    <label htmlFor='confirm-email'>
                        <span className='register-form__label'>Confirm email address </span>
                    </label>
                    <input type='text' id='confirm-email' name='confirm-email' />
                </div>
            </>
        )
    }
    renderStepTwo() {
        return (
            <>
                <div class='register-form__input'>
                    <label for='first-name'>
                        <span class='register-form__label'>First name </span>
                    </label>
                    <input type='text' id='first-name' name='first-name' />
                </div>
                <div class='register-form__input'>
                    <label for='last-name'>
                        <span class='register-form__label'>Last name </span>
                    </label>
                    <input type='text' id='last-name' name='last-name' />
                </div>
            </>
        )
    }
    renderStepThree() {
        return (
            <>
                <div class='register-form__input'>
                    <label for='password'>
                        <span class='register-form__label'>Password </span>
                    </label>
                    <input type='text' id='password' name='password' />
                </div>
                <div class='register-form__input'>
                    <label for='confirm-password'>
                        <span class='register-form__label'>Confirm password </span>
                    </label>
                    <input type='text' id='confirm-password' name='confirm-password' />
                </div>
            </>
        )
    }
    renderLoginLink() {
        return (
            <section className='register-form__secondary'>
                <p>Already have an account?</p>
                <p><a href='#' className='text-link'>Login</a></p>
            </section>
        )
    }
    render() {
        return (
            <form action='' className='register-form'>
                <h1 className='register-form__title'>Let’s get started</h1>
                <section className='register-form__container'>
                    {this.renderStepOne()}
                    <div className='register-form__submit'>
                        <Button className='Button--contained-large' type='submit'>
                            Next
                        </Button>
                    </div>
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
}

export default RegisterForm