import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './DashboardPage.css'
import Tabs from '../../components/Tabs/Tabs'
import Wallet from '../../components/Wallet/Wallet'
import RoundupsTab from '../RoundupsTab/RoundupsTab'

function DashboardPage() {
    return (
        <main className="overview">
            <Wallet />
            <Tabs />
            <Switch>
                <Route path={['/dashboard', '/dashboard/roundups']}>
                    <RoundupsTab />
                </Route>
            </Switch>
         </main>
    )
}

export default DashboardPage