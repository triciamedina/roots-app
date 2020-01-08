import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from '../../components/Utils/Utils'
import './LoginForm.css'
import RootsContext from '../../contexts/RootsContext'
import { withRouter } from 'react-router'
import ValidationService from '../../services/validation-service'
import ValidationError from '../ValidationError/ValidationError'

class LoginForm extends Component {
    static contextType = RootsContext
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = event.target
        this.context.handleSubmitJwtAuth()
        email.value = ''
        password.value = ''
    }
    renderLoginForm() {
        const { email, password } = this.context.login
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
                <div className='LoginForm__input'>
                    <label htmlFor='email'>
                        <span className='LoginForm__input-label'>
                            Email address
                        </span>
                    </label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email'
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
                <div className='LoginForm__input'>
                    <label htmlFor='password'>
                        <span className='LoginForm__input-label'>
                            Password
                        </span>
                    </label>
                    <input 
                        type='password'
                        id='password'
                        name='password' 
                        autoComplete='password'
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
                    {!this.context.login.isSuccessful && 
                        <p>{this.context.login.error}</p>
                    }
                </div>
            </section>
            <section className='LoginForm__secondary'>
                <p>Don’t have an account?</p>
                <p>
                    <Link to={'/register'} className='text-link'>
                        Get started
                    </Link>
                </p>
            </section>
        </form>
        )
    }
    render() {
        return (
            <>
                {this.context.login.isSuccessful 
                    ? <Redirect to={'/dashboard'} />
                    : this.renderLoginForm()
                }
            </>
        )
    }
}

export default withRouter(LoginForm)