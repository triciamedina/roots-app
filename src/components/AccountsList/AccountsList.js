import React, { Component } from 'react'
import './AccountsList.css'
import STORE from '../../store'
import RootsContext from '../../contexts/RootsContext'
import AccountItem from '../AccountItem/AccountItem'

class AccountsList extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const { accounts } = STORE
        this.context.updateAccounts(accounts)
    }
    render() {
        const { results } = this.context.accounts
        const list = results.map(item => 
            <AccountItem 
                key={item.id}
                title={item.title}
                number={item.number}
                id={item.id}
            />
        )
        return (
            <div className='AccountsList'>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default AccountsList