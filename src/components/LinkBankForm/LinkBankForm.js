import React, { Component } from 'react'
import './LinkBankForm.css'
import BankSearch from '../BankSearch/BankSearch'
import BanksList from '../BanksList/BanksList'


class LinkBankForm extends Component {
    render() {
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
}

export default LinkBankForm