import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AccountSetupForm.css';
import RootsContext from '../../contexts/RootsContext';
import { Button } from '../Utils/Utils';
import PlaidLink from 'react-plaid-link';
import config from '../../config';

class AccountSetupForm extends Component {
    __isMounted = false; 

    static contextType = RootsContext;

    handleOnSuccess = (publicToken, metadata) => {
        this.context.onAccountSetupSuccess(publicToken, metadata)
    };

    handleConfirm = () => {
        this.props.history.push('/dashboard')
    };

    handleOnExit = () => {
        console.log('Exit')
    };

    renderSetup() {
        return (
            <div className='LinkBankForm'>
                <div>
                    <h1 className='LinkBankForm__title'>
                        Link your bank
                    </h1>
                    <p className='LinkBankForm_description'>
                        Link to your account so that you can start giving back using the spare change from your everyday purchases.
                    </p>
                </div>
                <section className='LinkBankForm__results-container'>
                    {this.__isMounted &&
                        <PlaidLink
                            className='Button--contained-large'
                            clientName='Roots'
                            env='sandbox'
                            product={['transactions']}
                            publicKey={config.PLAID_PUBLIC_KEY}
                            onExit={this.handleOnExit}
                            onSuccess={this.handleOnSuccess}>
                                Connect your account
                        </PlaidLink>
                    }
                </section>
            </div>
        )
    };

    renderConfirmation() {
        const { institution } = this.context.accountSetup
        return (
            <section className='Confirmation'>
                <i className='fas fa-check-circle Confirmation__icon'></i>
                <h1 className='Confirmation__title'>
                    Bank account linked
                </h1>
                <p className='Confirmation__description'>
                    Your account has been successfully linked! The money to fund your donations will come from your {institution.name} account.
                </p>
                <Button
                    className='Button--contained-large'
                    onClick={this.handleConfirm}
                >
                    Start using Roots
                </Button>
            </section>
        )
    };

    componentDidMount() {
        this.__isMounted = true;
    }
    render() {
        const { isSuccessful } = this.context.accountSetup;
        let form;
        if (isSuccessful === false) {
            form = this.renderSetup()
        };
        if (isSuccessful === true) {
            form = this.renderConfirmation()
        };
        return (
            <>
                {form}
            </>
        );
    };
};

export default withRouter(AccountSetupForm);