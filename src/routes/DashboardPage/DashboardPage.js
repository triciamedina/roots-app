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
        this.context.updateDonations();
        this.context.updateTransactions();
        this.context.updateRoundups();
        this.context.checkAccountExists();
    };

    renderDashboard() {
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

    render() {
        return (
            <>
                {this.renderDashboard()}
            </>
        )
    };
};

export default DashboardPage;