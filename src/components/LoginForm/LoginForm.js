import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Input } from '../../components/Utils/Utils';
import './LoginForm.css';
import RootsContext from '../../contexts/RootsContext';
import { withRouter } from 'react-router';
import ValidationService from '../../services/validation-service';
import ValidationError from '../ValidationError/ValidationError';

class LoginForm extends Component {
    static contextType = RootsContext;

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = event.target;
        email.value = '';
        password.value = '';

        this.context.handleSubmitJwtAuth();
    };

    renderLoginForm() {
        const { email, password, isSuccessful } = this.context.login;

        return (
            <form 
                action='' 
                className='LoginForm'
                onSubmit={this.handleSubmit}
            >
                <h1 className='LoginForm__title'>
                    Welcome back
                </h1>
                <section className='LoginForm__container'>
                    <div className='LoginForm__input-container'>
                        <Input 
                            className='Input__login'
                            type='text' 
                            id='email' 
                            name='email'
                            placeholder='Email address'
                            autoComplete='email'
                            aria-label='Login email'
                            aria-required
                            onChange={e => this.context.onLoginEmailChanged(e.target.value)}
                        />
                        {email.touched &&
                            (<ValidationError 
                                message={ValidationService.validateLoginEmail(email.value)} 
                            />)
                        }
                    </div>
                    <div className='LoginForm__input-container'>
                        <Input
                            className='Input__login'
                            type='password'
                            id='password'
                            name='password' 
                            placeholder='Password'
                            autoComplete='current-password'
                            aria-label='Login password'
                            aria-required
                            onChange={e => this.context.onLoginPasswordChanged(e.target.value)}
                        />
                        {password.touched &&
                            (<ValidationError 
                                message={ValidationService.validateLoginPassword(password.value)} 
                            />)
                        }
                    </div>
                    <div className='LoginForm__submit'>
                        <Button 
                            className='Button--contained-large' 
                            type='submit'
                            disabled={
                                ValidationService.validateLoginEmail(email.value)
                                || ValidationService.validateLoginPassword(password.value)
                            }
                        >
                            Next
                        </Button>
                        {!isSuccessful && 
                            (<ValidationError 
                                message={this.context.login.error} 
                            />)
                        }
                    </div>
                </section>
                <section className='LoginForm__secondary'>
                    <p className='LoginForm__secondary-title'>Don’t have an account?</p>
                    <Link to={'/register'} className='LoginForm__Link'>
                        <Button className='Button--text-small'>
                            Get started
                        </Button>
                    </Link>
                </section>
            </form>
        )
    };
    
    render() {
        const { isSuccessful } = this.context.login;
        return (
            <>
                {isSuccessful 
                    ? <Redirect to={'/dashboard'} />
                    : this.renderLoginForm()
                }
            </>
        )
    };
};

export default withRouter(LoginForm);