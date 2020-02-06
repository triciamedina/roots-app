import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Confirmation.css';
import { Button, Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import { CheckCircle } from 'react-feather';
import ReactRouterPropTypes from 'react-router-prop-types';

class Confirmation extends Component {
    static contextType = RootsContext;

    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired
    };

    handleCancel = () => {
        this.context.handleCloseModal();
        this.props.history.goBack();
    };

    handleConfirm = () => {
        this.context.handleConfirmDonation();
        this.props.history.push('/dashboard/donations');
    };

    render() {
        if (!this.context.projects.showModal) {
            return null
        };

        const { donateAmount } = this.context.projects;

         return (
            <section className='Confirmation__container'>
                <CheckCircle size='100' color='#EAEBF3' className='Confirmation__icon' />
                <h1 className='Confirmation__title'>
                    Complete your donation at Donors Choose
                </h1>
                <p className='Confirmation__description'>
                    You should be redirected to Donors Choose to complete your donation of {Formatter.format(donateAmount.value)}.
                </p>
                <Button 
                    className='Button--contained-large'
                    onClick={this.handleConfirm}
                >
                    Donation complete!
                </Button>
                <Button
                    className='Button--text-large'
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
            </section>
        )
    };
};

export default withRouter(Confirmation);