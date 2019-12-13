import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import { RegisterSubmitButton } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'
import { withRouter } from 'react-router'

class RegisterForm extends Component {
    static contextType = RootsContext
    handleStepOne = (event) => {
        event.preventDefault()
        const { emailInput, emailConfirmInput } = event.target
        this.context.handleRegisterStepOne()
        emailInput.value = ''
        emailConfirmInput.value = ''
    }
    handleStepTwo = (event) => {
        event.preventDefault()
        const { firstName, lastName } = event.target
        this.context.handleRegisterStepTwo()
        firstName.value = ''
        lastName.value = ''
    }
    handleStepThree = (event) => {
        event.preventDefault()
        this.context.handleRegisterSubmit()
        this.props.history.push('/dashboard')
    }
    renderStepOne() {
        return (
            <form 
                action=''
                className='register-form'
                onSubmit={this.handleStepOne}
            >
                <h1 className='register-form__title'>
                    Let’s get started
                </h1>
                <section className='register-form__container'>
                    <div className='register-form__input'>
                        <label htmlFor='emailInput'>
                            <span className='register-form__label'>
                                Email address
                            </span>
                        </label>
                        <input 
                            type='text' 
                            id='emailInput' 
                            name='emailInput'
                            aria-required 
                            onChange={e => this.context.onRegisterEmailChanged(e.target.value)}
                        />
                    </div>
                    <div className='register-form__input'>
                        <label htmlFor='emailConfirmInput'>
                            <span className='register-form__label'>
                                Confirm email address
                            </span>
                        </label>
                        <input 
                            type='text'
                            id='emailConfirmInput'
                            name='emailConfirmInput' 
                            aria-required
                            onChange={e => this.context.onRegisterConfirmedEmailChanged(e.target.value)}
                        />
                    </div>
                    <RegisterSubmitButton />
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepTwo() {
        return (
            <form 
                action=''
                className='register-form'
                onSubmit={this.handleStepTwo}
            >
                <h1 className='register-form__title'>
                    Let’s get started
                </h1>
                <section className='register-form__container'>
                    <div className='register-form__input'>
                        <label htmlFor='firstName'>
                            <span className='register-form__label'>
                                First name
                            </span>
                        </label>
                        <input 
                            type='text'
                            id='firstName'
                            name='firstName'
                            aria-required 
                            onChange={e => this.context.onRegisterFirstNameChanged(e.target.value)}
                        />
                    </div>
                    <div className='register-form__input'>
                        <label htmlFor='lastName'>
                            <span className='register-form__label'>
                                Last name
                            </span>
                        </label>
                        <input 
                            type='text' 
                            id='lastName'
                            name='lastName'
                            aria-required
                            onChange={e => this.context.onRegisterLastNameChanged(e.target.value)}
                        />
                    </div>
                    <RegisterSubmitButton />
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepThree() {
        return (
            <form 
                action=''
                className='register-form'
                onSubmit={this.handleStepThree}
            >
                <h1 className='register-form__title'>
                    Let’s get started
                </h1>
                <section className='register-form__container'>
                    <div className='register-form__input'>
                        <label htmlFor='passwordInput'>
                            <span className='register-form__label'>
                                Password
                            </span>
                        </label>
                        <input 
                            type='text'
                            id='passwordInput'
                            name='passwordInput' 
                            aria-required
                            onChange={e => this.context.onRegisterPasswordChanged(e.target.value)}
                        />
                    </div>
                    <div className='register-form__input'>
                        <label htmlFor='passwordConfirmInput'>
                            <span className='register-form__label'>
                                Confirm password
                            </span>
                        </label>
                        <input 
                            type='text' 
                            id='passwordConfirmInput' 
                            name='passwordConfirmInput' 
                            aria-required
                            onChange={e => this.context.onRegisterConfirmedPasswordChanged(e.target.value)}
                        />
                    </div>
                    <RegisterSubmitButton />
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderLoginLink() {
        return (
            <section className='register-form__secondary'>
                <p>Already have an account?</p>
                <p>
                    <Link to={'/login'} className='text-link'>
                        Login
                    </Link>
                </p>
            </section>
        )
    }
    render() {
        let form
        if (this.context.register.currentStep === 1) {
            form = this.renderStepOne()
        } 
        if (this.context.register.currentStep === 2) {
            form = this.renderStepTwo()
        }
        if (this.context.register.currentStep === 3) {
            form = this.renderStepThree()
        }
        return (
            <>
                {form}
            </>
        )
    }
}

export default withRouter(RegisterForm)