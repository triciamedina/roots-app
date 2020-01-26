import React, { Component } from 'react';
import './RoundupsModal.css';
import { Button } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';

class RoundupsModal extends Component {
    static contextType = RootsContext;

    handleCancel = () => {
        const { selected } = this.context.transactions;
        this.context.handleCloseRoundupsModal(selected);
    };

    handleConfirm = () => {
        const { selected } = this.context.transactions;
        this.context.handleCheckTransaction(selected)
    };

    render() {
        return (
            <section className='RoundupsModal'>
                <div className='RoundupsModal__screen'>
                    <h1 className='RoundupsModal__title'>
                        Are you sure?
                    </h1>
                    <p className='RoundupsModal__description'>
                        Once a round up is added to your balance this cannot be undone.
                    </p>
                    <label 
                        htmlFor='modal-preference' 
                        className='RoundupsModal__preference-container'
                    >
                        <input 
                            type='checkbox'
                            id='modal-preference'
                            name='modal-preference'
                            onChange={this.context.updateModalPreference}
                        />
                        <span className='RoundupsModal__preference'>
                            Do not ask me again
                        </span>
                    </label>
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
                            Add
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
};

export default RoundupsModal;