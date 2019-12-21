import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import { Button } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'
import { withRouter } from 'react-router'
import ValidationService from '../../services/validation-service'
import ValidationError from '../ValidationError/ValidationError'

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
        this.props.history.push('/account-setup')
    }
    renderStepOne() {
        const { email, confirmedEmail } = this.context.register
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
                        {email.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterEmail(email.value)}
                            />
                        }
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
                        {confirmedEmail.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterEmailMatch(email.value, confirmedEmail.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__submit'>
                        <Button 
                            className='Button--contained-large'
                            type='submit'
                            disabled={
                                ValidationService.validateRegisterEmail(email.value)
                                || ValidationService.validateRegisterEmailMatch(email.value, confirmedEmail.value)
                            }
                        >
                                Next
                        </Button>
                    </div>
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepTwo() {
        const { firstName, lastName } = this.context.register
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
                        {firstName.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterFirstName(firstName.value)}
                            />
                        }
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
                        {lastName.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterLastName(lastName.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__submit'>
                        <Button 
                            className='Button--contained-large'
                            type='submit'
                            disabled={
                                ValidationService.validateRegisterFirstName(firstName.value)
                                || ValidationService.validateRegisterLastName(lastName.value)
                            }
                        >
                                Next
                        </Button>
                    </div>
                </section>
                {this.renderLoginLink()}
            </form>
        )
    }
    renderStepThree() {
        const { password, confirmedPassword } = this.context.register
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
                        {password.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterPassword(password.value)}
                            />
                        }
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
                        {confirmedPassword.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterPasswordMatch(password.value, confirmedPassword.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__submit'>
                        <Button 
                            className='Button--contained-large'
                            type='submit'
                            disabled={
                                ValidationService.validateRegisterPassword(password.value)
                                || ValidationService.validateRegisterPasswordMatch(password.value, confirmedPassword.value)
                            }
                        >
                                Next
                        </Button>
                    </div>
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