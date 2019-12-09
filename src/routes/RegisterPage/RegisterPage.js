import React, { Component } from 'react'
import './RegisterPage.css'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'

class RegisterPage extends Component {
    static defaultProps = {
        history: {
          goBack: () => {},
        },
      }
    handleGoback = () => {
        const { history } = this.props
        history.goBack()
    }
    render() {
        return (
            <>
                <SecondaryNav handleGoBack={this.handleGoback}/>
                <main className='register'>
                    <RegisterForm />
                </main>
            </>
        )
    }
}

export default RegisterPage