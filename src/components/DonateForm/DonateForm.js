import React from 'react'
import './DonateForm.css'
import { Button, Formatter } from '../Utils/Utils'
import STORE from '../../store'
import { Link, withRouter } from 'react-router-dom'

function DonateForm(props) {
    const project = STORE.projects.filter(project => project.id === parseInt(props.match.params.project_id))
    const { funding, url } = project[0]
    const { walletBalance } = STORE
    return (
        <section className='DonateForm'>
            <div className='DonateForm__slide-container'>
                <div className='DonateForm__slide-caption-container'>
                    <p className='DonateForm__funding-balance'>
                        {Formatter.format(funding.stillNeeded)} still needed
                    </p>
                    <p className='DonateForm__funding-goal'>
                        {Formatter.format(funding.goal)} goal
                    </p>
                </div>
                <input 
                    type='range' 
                    min='1' 
                    max={funding.goal} // Pull from context
                    value={funding.balance} // Pull from context
                    className='DonateForm__slider' 
                    disabled='disabled' 
                />
            </div>
            <form action='' className='DonateForm__form'>
                <div className='DonateForm__form-container'>
                    <div className='DonateForm__form-input'>
                        <input 
                            type='text'
                            id='donate-amount'
                            name='amount' 
                            value={Formatter.format(walletBalance)} // Pull from context
                        />
                    </div>
                    <div className='donate-form__submit'> 
                        <Link to={'/dashboard'}>
                            <Button type='submit' className='Button--contained-large'>
                                Give
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default withRouter(DonateForm)