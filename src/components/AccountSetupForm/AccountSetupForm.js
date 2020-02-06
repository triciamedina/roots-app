import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PlaidLink from 'react-plaid-link';
import './AccountSetupForm.css';
import RootsContext from '../../contexts/RootsContext';
import { Button } from '../Utils/Utils';
import config from '../../config';
import { CheckCircle } from 'react-feather';
import ReactRouterPropTypes from 'react-router-prop-types'

class AccountSetupForm extends Component {
    static contextType = RootsContext;

    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired
    };
    
    handleOnSuccess = (publicToken, metadata) => {
        this.context.onAccountSetupSuccess(publicToken, metadata)
    };

    handleConfirm = () => {
        this.props.history.push('/dashboard')
    };

    handleOnExit = () => {
        console.log('Exit')
    };

    initializeLink() {
        return (
            <PlaidLink
                className='Button--contained-large'
                style={        
                    {
                        padding: '15px 45px',
                        outline: 'none',
                        background: '#472BBA',
                        border: '0',
                        borderRadius: '4px',
                    }
                }
                clientName='Roots'
                env='sandbox'
                product={['transactions']}
                publicKey={config.PLAID_PUBLIC_KEY}
                onExit={this.handleOnExit}
                onSuccess={this.handleOnSuccess}>
                    Connect your account
            </PlaidLink>
        )
    };

    renderSetup() {
        const { accountSetup } = this.context
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
                    {accountSetup.isInstitutionFormMounted &&
                        this.initializeLink()
                    }
                </section>
            </div>
        )
    };

    renderConfirmation() {
        const { institution } = this.context.accountSetup
        return (
            <section className='Confirmation'>
                <CheckCircle size='100' color='#EAEBF3' className='Confirmation__icon' />
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
        this.context.institutionFormDidMount()
    };

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