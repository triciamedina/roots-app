import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wallet.css';
import { Button, Formatter } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';

class Wallet extends Component {
    static contextType = RootsContext;

    render() {
        const { balance , dailyTotal } = this.context.wallet;

        return (
            <section className='Wallet__container'>
                <p className='Wallet__title'>
                    Your total balance
                </p>
                <h1 className='Wallet__balance'>
                    {Formatter.format(balance)}
                </h1>
                <p className='Wallet__subtitle'>
                    + {Formatter.format(dailyTotal)} today
                </p>
                <div>
                    <Link className='Wallet__Link' to={'/projects'}>
                        <Button className='Button--contained-small Wallet__give'>
                            Give
                        </Button>
                    </Link>
                </div>
            </section>
        )
    };
};

export default Wallet;