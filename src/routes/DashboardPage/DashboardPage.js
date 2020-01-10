import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './DashboardPage.css'
import Wallet from '../../components/Wallet/Wallet'
import RoundupsTab from '../RoundupsTab/RoundupsTab'
import DonationsTab from '../DonationsTab/DonationsTab'
import MainNav from '../../components/MainNav/MainNav'
import RootsContext from '../../contexts/RootsContext'
import STORE from '../../store'

class DashboardPage extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const { donationsTotal, transactions } = STORE
        this.context.updateDonations(donationsTotal)
        this.context.updateTransactions(transactions)
    }
    render() {
        return (
            <>
                <MainNav />
                <main className='DashBoardPage'>
                    <Wallet />
                    <Switch>
                        <Route exact path={['/dashboard', '/dashboard/roundups']}>
                            <RoundupsTab />
                        </Route>
                        <Route exact path={['/dashboard/donations']}>
                            <DonationsTab />
                        </Route>
                    </Switch>
                </main>
             </>
        )
    }
}

export default DashboardPage