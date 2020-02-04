import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './RoundupsTab.css';
import Tabs from '../../components/Tabs/Tabs';
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import DateList from '../../components/DateList/DateList';
import RoundupsToggle from '../../components/RoundupsToggle/RoundupsToggle';
import RootsContext from '../../contexts/RootsContext';
import TransactionService from '../../services/transaction-service';
import { Button } from '../../components/Utils/Utils';

class RoundupsTab extends Component {
    static contextType = RootsContext;
    
    renderList() {
        const { transactions } = this.context;
        const list = TransactionService.groupTransactionsByDay(transactions.items);
        
        const keys = Object.keys(list).sort((a, b) => {
            return b - a
        });

        return keys.map((key, index) => {
            let title = key;
            let transactionsByDay = list[key];

            return (
                <fieldset key={title}>
                    <legend>
                        <h3 className='TransactionsList__title'>{moment(title, 'YYYY-MM_DD').format('MMMM Do, YYYY')}</h3>
                    </legend>
                    <DateList 
                        key={index}
                        id={index}
                        items={transactionsByDay}
                        listItemType={TransactionItem}
                        className='TransactionsList'
                    />
                </fieldset>
            )
        });
    };

    renderSetupButton() {
        return (
            <>
                <h3 className='TransactionsList__setup-subtitle'>
                    Link your bank account to start using Roots
                </h3>
                <Link className='TransactionsList__setup-link' to='/account-setup'>
                    <Button className='Button--contained-small'>
                        Set up your account
                    </Button>
                </Link>
            </>
        )
    };

    render() {
        const { accountSetup: { isSuccessful } } = this.context;
        
        return (
            <>
                <Tabs active='roundups'/>
                <div 
                    className='RoundupsTab'
                >
                    {isSuccessful 
                        ? <RoundupsToggle />
                        : ''
                    }
                    <section className='TransactionsList__container'>
                        {isSuccessful 
                            ? this.renderList()
                            : this.renderSetupButton()
                        }
                    </section>
                </div>
            </>
        )
    };
};

export default RoundupsTab;