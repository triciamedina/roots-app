import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './DashboardPage.css'
import Wallet from '../../components/Wallet/Wallet'
import RoundupsTab from '../RoundupsTab/RoundupsTab'
import DonationsTab from '../DonationsTab/DonationsTab'
import MainNav from '../../components/MainNav/MainNav'

function DashboardPage() {
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

export default DashboardPage