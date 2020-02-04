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
                <h2 className='Wallet__title'>
                    Your balance
                </h2>
                <div className='Wallet__card'>
                    <h3 className='Wallet__balance'>
                        {Formatter.format(balance)}
                    </h3>
                    <p className='Wallet__subtitle'>
                        + {Formatter.format(dailyTotal)} today
                    </p>
                    <div>
                        <Link className='Wallet__Link' to={'/projects'}>
                            <Button 
                                className='WalletButton--contained-small Wallet__give'
                            >
                                Donate
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    };
};

export default Wallet;