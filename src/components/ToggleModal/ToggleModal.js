import React, { Component } from 'react';
import './ToggleModal.css';
import { Button } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';

class ToggleModal extends Component {
    static contextType = RootsContext;

    handleCancel = () => {
        this.context.handleCloseToggleModal();
    };

    handleConfirm = () => {
        this.context.onAutoRoundupsChange();
    };

    render() {
        return (
            <section 
                className='ToggleModal'
                role='dialog'
                aria-labelledby='toggle-dialog-title'
                aria-describedby='toggle-dialog-description'
            >
                <div className='ToggleModal__screen'>
                    <h1 
                        id='toggle-dialog-title'
                        className='ToggleModal__title'
                    >
                        Are you sure?
                    </h1>
                    <p
                        id='toggle-dialog-description'
                        className='ToggleModal__description'
                    >
                        Turning on automatic round ups will add round ups from the past thirty days to your balance.
                    </p>
                    <div>
                        <Button 
                            className='Button--contained-xsmall'
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button 
                            className='Button--contained-xsmall'
                            onClick={this.handleConfirm}
                        >
                            Turn on
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
};

export default ToggleModal;