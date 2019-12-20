import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AccountSetupForm.css'
import BankSearch from '../BankSearch/BankSearch'
import BanksList from '../BanksList/BanksList'
import RootsContext from '../../contexts/RootsContext'
import AccountsList from '../../components/AccountsList/AccountsList'
import { Button } from '../Utils/Utils'

class AccountSetupForm extends Component {
    static contextType = RootsContext
    handleSetupConfirmed = () => {
        this.context.onAccountSetupConfirmed()
        this.props.history.push('/dashboard')
    }
    renderLinkBankStep() {
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
                    <BankSearch />
                    <BanksList />
                </section>
            </div>
        )
    }
    renderSelectAccountStep() {
        return (
            <div className='LinkBankForm'>
            <div>
                <h1 className='LinkBankForm__title'>
                    Select account
                </h1>
                <p className='LinkBankForm_description'>
                    Choose the funding source you want to use with Roots.
                </p>
            </div>
            <section className='LinkBankForm__results-container'>
                <AccountsList />
            </section>
        </div>
        )
    }
    renderConfirmation() {
        const { selected } = this.context.banks
        const selectedBank = this.context.banks.results.filter(bank => 
                bank.id === parseInt(selected)
            )
        return (
            <section className='Confirmation'>
                <i className='fas fa-check-circle Confirmation__icon'></i>
                <h1 className='Confirmation__title'>
                    Bank account linked
                </h1>
                <p className='Confirmation__description'>
                    Your account has been successfully linked! The money to fund your donations will come from your {selectedBank[0].title} account.
                </p>
                <Button
                    className='Button--contained-large'
                    onClick={this.handleSetupConfirmed}
                >
                    Start using Roots
                </Button>
            </section>
        )
    }
    render() {
        const { currentStep } = this.context.accountSetup
        let form
        if (currentStep === 1) {
            form = this.renderLinkBankStep()
        }
        if (currentStep === 2) {
            form = this.renderSelectAccountStep()
        }
        if (currentStep === 3) {
            form = this.renderConfirmation()
        }
        return (
            <>
                {form}
            </>
        )
    }
}

export default withRouter(AccountSetupForm)