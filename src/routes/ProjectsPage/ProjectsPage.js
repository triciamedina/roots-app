import React, { Component } from 'react';
import './ProjectsPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';
import RootsContext from '../../contexts/RootsContext';
import ValidationService from '../../services/validation-service';

class ProjectsPage extends Component {
    static contextType = RootsContext;

    componentDidMount() {
       const projects = JSON.parse(localStorage.getItem('projects'));

       if (projects) {
           this.context.updateProjects(projects)
       };

       this.context.updateWallet();
    };

    renderForm() {
        return (
            <>
                <SearchForm />
                <SearchResults />
            </>
        )
    };
    
    renderNotification() {
        const wallet = JSON.parse(localStorage.getItem('wallet')) || this.context.wallet

        return (
            <div className='ProjectsPage__notification'>
                <i className='fas fa-times-circle ProjectsPage__notification--icon'></i>
                <h1 className='ProjectsPage__notification--title'>
                    {ValidationService.validateWalletBalance(wallet.balance)}
                </h1>
                <p className='ProjectsPage__notification--description'>
                    Check that your bank account is linked and start adding round ups to your account to give back today.
                </p>
            </div>
        )
    };

    render() {
        const wallet = JSON.parse(localStorage.getItem('wallet')) || this.context.wallet

        return (
            <>
                <SecondaryNav />
                <main className='ProjectsPage'>
                    {ValidationService.validateWalletBalance(wallet.balance)
                        ? this.renderNotification()
                        : this.renderForm()
                    }
                </main>
            </>
        )
    }
};

export default ProjectsPage;