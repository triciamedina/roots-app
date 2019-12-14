import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import { Button } from '../Utils/Utils'
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
                className='RegisterForm'
                onSubmit={this.handleStepOne}
            >
                <h1 className='RegisterForm__title'>
                    Let’s get started
                </h1>
                <section className='RegisterForm__container'>
                    <div className='RegisterForm__input'>
                        <label htmlFor='emailInput'>
                            <span className='RegisterForm__label'>
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
                    <div className='RegisterForm__input'>
                        <label htmlFor='emailConfirmInput'>
                            <span className='RegisterForm__label'>
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
                    {this.renderSubmitButton()}
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepTwo() {
        return (
            <form 
                action=''
                className='RegisterForm'
                onSubmit={this.handleStepTwo}
            >
                <h1 className='RegisterForm__title'>
                    Let’s get started
                </h1>
                <section className='RegisterForm__container'>
                    <div className='RegisterForm__input'>
                        <label htmlFor='firstName'>
                            <span className='RegisterForm__label'>
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
                    <div className='RegisterForm__input'>
                        <label htmlFor='lastName'>
                            <span className='RegisterForm__label'>
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
                    {this.renderSubmitButton()}
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepThree() {
        return (
            <form 
                action=''
                className='RegisterForm'
                onSubmit={this.handleStepThree}
            >
                <h1 className='RegisterForm__title'>
                    Let’s get started
                </h1>
                <section className='RegisterForm__container'>
                    <div className='RegisterForm__input'>
                        <label htmlFor='passwordInput'>
                            <span className='RegisterForm__label'>
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
                    <div className='RegisterForm__input'>
                        <label htmlFor='passwordConfirmInput'>
                            <span className='RegisterForm__label'>
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
                    {this.renderSubmitButton()}
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderSubmitButton() {
        return (
            <div className='RegisterForm__submit'>
                <Button className='Button--contained-large' type='submit'>
                        Next
                </Button>
            </div>
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