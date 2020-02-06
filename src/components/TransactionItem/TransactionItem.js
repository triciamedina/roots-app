import React, { Component } from 'react';
import './TransactionItem.css';
import { Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import ReactToolTip from 'react-tooltip';
import TransactionService from '../../services/transaction-service';
import PropTypes from 'prop-types';

class TransactionItem extends Component {
    static contextType = RootsContext;

    static propTypes = {
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        transaction_id: PropTypes.string.isRequired,
        isChecked: PropTypes.bool,
    };

    componentDidMount() {
        this.context.updateWallet();
    };

    render() {
        const { name, amount, transaction_id, isChecked = false } = this.props;
        const { showModalAgain } = this.context.transactions
        const roundupAmount = TransactionService.calculateRoundup(amount);

        return (
            <li key={transaction_id} className='TransactionItem'>
                <div className='TransactionItem__container'>
                    <p className='TransactionItem__title'>
                        {name}
                    </p>
                    <p 
                        className='TransactionItem__amount'
                        data-tip='Transaction amount'
                    >
                        {Formatter.format(amount)}
                    </p>
                </div>
                    <label 
                        htmlFor={transaction_id} 
                        className='TransactionItem__toggle'
                    >
                        <h4 
                            className='TransactionItem__roundup'
                            data-tip='Round up amount'
                        >
                            {Formatter.format(roundupAmount)}
                        </h4>
                        
                        <input 
                            type='checkbox' 
                            id={transaction_id}
                            name='transactions' 
                            checked={isChecked}
                            disabled={isChecked}
                            onChange={e => (showModalAgain
                                ? this.context.openRoundupsModal(e.target.id)
                                : this.context.handleCheckTransaction(e.target.id)
                            )}
                        />
                        <span 
                            className='circle'
                        >
                        </span>
                    </label>
                    <ReactToolTip />
            </li>
        )
    };
};

export default TransactionItem;