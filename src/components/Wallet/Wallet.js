import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to={'/projects'}>
                    <Button className='Button--contained-small Wallet__give'>
                        Give
                    </Button>
                </Link>
            </section>
    )
}

export default Wallet