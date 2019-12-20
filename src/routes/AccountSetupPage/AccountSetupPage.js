import React, { Component } from 'react'
import './AccountSetupPage.css'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'
import AccountSetupForm from '../../components/AccountSetupForm/AccountSetupForm'
import RootsContext from '../../contexts/RootsContext'

class AccountSetupPage extends Component {
    static contextType = RootsContext
    render() {
        return (
            <>
                <SecondaryNav />
                <main className='AccountSetupPage'>
                    <AccountSetupForm />
                </main>
            </>
        )
    }

}

export default AccountSetupPage