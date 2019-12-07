import React from 'react'
import './Wallet.css'
import { Button } from '../Utils/Utils'

function Wallet() {
    return (
        <section className='wallet__container'>
                <p className='wallet__title'>
                    Your total balance
                </p>
                <h1 className='wallet__balance'>
                    $30.00
                </h1>
                <p className='wallet__subtitle'>
                    + $0.45 today
                </p>
                <Button className='Button--contained-small Wallet__give'>
                    Give
                </Button>
            </section>
    )
}

export default Wallet