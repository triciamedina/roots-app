import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';
import { Button, Input } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import { withRouter } from 'react-router';
import ValidationService from '../../services/validation-service';
import ValidationError from '../ValidationError/ValidationError';

class RegisterForm extends Component {
    static contextType = RootsContext;

    handleStepOne = (event) => {
        event.preventDefault();

        const { emailInput, emailConfirmInput } = event.target;

        this.context.handleRegisterStepOne();

        emailInput.value = '';

        emailConfirmInput.value = '';
    };

    handleStepTwo = (event) => {
        event.preventDefault();

        const { firstName, lastName } = event.target;
        firstName.value = '';
        lastName.value = '';

        this.context.handleRegisterStepTwo();
    };

    handleStepThree = (event) => {
        event.preventDefault();
        this.context.handleRegisterSubmit();
    };

    renderStepOne() {
        const { email, confirmedEmail } = this.context.register;

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
                    <div className='RegisterForm__input-container'>
                        <Input 
                            className='Input__register'
                            type='text' 
                            id='emailInput' 
                            name='emailInput'
                            placeholder='Email address'
                            aria-label='Registration email address'
                            aria-required
                            onChange={e => this.context.onRegisterEmailChanged(e.target.value)}
                        />
                        {email.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterEmail(email.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__input-container'>
                        <Input 
                            className='Input__register'
                            type='text'
                            id='emailConfirmInput'
                            name='emailConfirmInput'
                            placeholder='Confirm email address'
                            aria-label='Confirm email address'
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
    };

    renderStepTwo() {
        const { firstName, lastName } = this.context.register;

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
                    <div className='RegisterForm__input-container'>
                        <Input
                            className='Input__register'
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='First name'
                            aria-label='First name'
                            aria-required 
                            onChange={e => this.context.onRegisterFirstNameChanged(e.target.value)}
                        />
                        {firstName.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterFirstName(firstName.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__input-container'>
                        <Input 
                            className='Input__register'
                            type='text' 
                            id='lastName'
                            name='lastName'
                            placeholder='Last name'
                            aria-label='Last name'
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
    };

    renderStepThree() {
        const { password, confirmedPassword, isSuccessful, error } = this.context.register;

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
                    <div className='RegisterForm__input-container'>
                        <Input
                            className='Input__register'
                            type='password'
                            id='passwordInput'
                            name='passwordInput' 
                            placeholder='Password'
                            aria-label='Password'
                            aria-required
                            onChange={e => this.context.onRegisterPasswordChanged(e.target.value)}
                        />
                        {password.touched &&
                            <ValidationError 
                                message={ValidationService.validateRegisterPassword(password.value)}
                            />
                        }
                    </div>
                    <div className='RegisterForm__input-container'>
                        <Input 
                            className='Input__register'
                            type='password' 
                            id='passwordConfirmInput' 
                            name='passwordConfirmInput' 
                            placeholder='Confirm password'
                            aria-label='Confirm password'
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
                        {!isSuccessful &&
                            <p>{error}</p>
                        }
                    </div>
                </section>
                {this.renderLoginLink()}
            </form>
        )
    };

    renderLoginLink() {
        return (
            <section className='RegisterForm__secondary'>
                <p className='RegisterForm__secondary-title'>
                    Already have an account?
                </p>
                <Link to={'/login'} className='RegisterForm__Link'>
                    <Button className='Button--text-small'>
                        Login
                    </Button>
                </Link>
            </section>
        )
    };

    render() {
        const { currentStep } = this.context.register
        let form;

        if (currentStep === 1) {
            form = this.renderStepOne()
        };

        if (currentStep === 2) {
            form = this.renderStepTwo()
        };

        if (currentStep === 3) {
            form = this.renderStepThree()
        };

        return (
            <>
                {form}
            </>
        )
    };
};

export default withRouter(RegisterForm);