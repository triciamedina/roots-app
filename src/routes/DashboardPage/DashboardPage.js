import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './DashboardPage.css';
import Wallet from '../../components/Wallet/Wallet';
import RoundupsTab from '../RoundupsTab/RoundupsTab';
import DonationsTab from '../DonationsTab/DonationsTab';
import MainNav from '../../components/MainNav/MainNav';
import RootsContext from '../../contexts/RootsContext';

class DashboardPage extends Component {
    static contextType = RootsContext;

    componentDidMount() {
        this.context.getUserInfo();

        this.context.checkAccountExists().then(() => {
            const { accountSetup: { isSuccessful } } = this.context;

            if (isSuccessful) {
                this.context.updateRoundups().then(() => {
                    this.context.updateTransactions().then(() => {
                        this.context.updateCheckedTransactions()
                    })
                })
                this.context.updateDonations();
            }
        })

        this.context.institutionFormRemoved();
    };

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
    };
};

export default DashboardPage;