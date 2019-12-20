import React, { Component } from 'react'
import './AccountSetupPage.css'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'
import LinkBankForm from '../../components/LinkBankForm/LinkBankForm'
import RootsContext from '../../contexts/RootsContext'
import STORE from '../../store'

class AccountSetupPage extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const { banks } = STORE
        this.context.updateBanks(banks)
    }
    render() {
        return (
            <>
                <SecondaryNav />
                <main className='AccountSetupPage'>
                    <LinkBankForm />
                </main>
            </>
        )
    }

}

export default AccountSetupPage