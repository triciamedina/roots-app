import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Utils/Utils'
import './LoginForm.css'
import RootsContext from '../../contexts/RootsContext'
import { withRouter } from 'react-router'

class LoginForm extends Component {
    static contextType = RootsContext
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = event.target
        this.context.handleSubmitBasicAuth()
        email.value = ''
        password.value = ''
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <form 
                action='' 
                className='login-form'
                onSubmit={this.handleSubmit}
            >
            <h1 className='login-form__title'>
                Welcome back
            </h1>
            <section className='login-form__container'>
                <div className='login-form__input'>
                    <label htmlFor='email'>
                        <span className='login-form__label'>
                            Email address
                        </span>
                    </label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        aria-label='Login email'
                        aria-required
                        onChange={e => this.context.onLoginEmailChanged(e.target.value)}
                    />
                </div>
                <div className='login-form__input'>
                    <label htmlFor='password'>
                        <span className='login-form__label'>
                            Password
                        </span>
                    </label>
                    <input 
                        type='text'
                        id='password'
                        name='password' 
                        aria-label='Login password'
                        aria-required
                        onChange={e => this.context.onLoginPasswordChanged(e.target.value)}
                    />
                </div>
                <div className='login-form__submit'>
                    <Button className='Button--contained-large' type='submit'>
                        Next
                    </Button>
                </div>
            </section>
            <section className='login-form__secondary'>
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
}

export default withRouter(LoginForm)