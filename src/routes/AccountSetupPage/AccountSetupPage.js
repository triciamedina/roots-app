import React, { Component } from 'react';
import './AccountSetupPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import AccountSetupForm from '../../components/AccountSetupForm/AccountSetupForm';
import RootsContext from '../../contexts/RootsContext';

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
                {this.renderAccountSetup()}
            </>
        )
    };
};

export default AccountSetupPage;