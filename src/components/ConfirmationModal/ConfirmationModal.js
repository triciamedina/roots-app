import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ConfirmationModal.css';
import { Button, Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';

class ConfirmationModal extends Component {
    static contextType = RootsContext;

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
            <section className='ConfirmationModal__container'>
                <i className='fas fa-check-circle ConfirmationModal__icon'></i>
                <h1 className='ConfirmationModal__title'>
                    Complete your donation at Donors Choose
                </h1>
                <p className='ConfirmationModal__description'>
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

export default withRouter(ConfirmationModal);