import React, { Component } from 'react';
import './AccountSetupPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import AccountSetupForm from '../../components/AccountSetupForm/AccountSetupForm';
import RootsContext from '../../contexts/RootsContext';
import TokenService from '../../services/token-service';
import { Redirect } from 'react-router-dom';

class AccountSetupPage extends Component {
    static contextType = RootsContext;

    renderAccountSetup() {
        return (
            <>
                <SecondaryNav />
                <main className='AccountSetupPage'>
                    <AccountSetupForm />
                </main>
            </>
        )
    };

    render() {
        return (
            <>
                {TokenService.hasAccountToken()
                    ? <Redirect to='/dashboard' />
                    : this.renderAccountSetup()
                }
            </>
        )
    };
};

export default AccountSetupPage;