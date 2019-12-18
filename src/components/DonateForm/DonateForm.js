import React, { Component } from 'react'
import './DonateForm.css'
import { Button, Formatter } from '../Utils/Utils'
import { withRouter } from 'react-router-dom'
import RootsContext from '../../contexts/RootsContext'

class DonateForm extends Component {
    static contextType = RootsContext
    handleSubmit = (event) => {
        event.preventDefault()
        this.context.handleOpenModal()
    }
    render() {
        if (this.context.projects.showModal) {
            return null
        }
        const project = this.context.projects.results.filter(project => project.id === parseInt(this.props.match.params.project_id))
        const { funding } = project[0]
        const { balance } = this.context.wallet
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
                <form 
                    action=''
                    className='DonateForm__form'
                    onSubmit={this.handleSubmit}
                >
                    <div className='DonateForm__form-container'>
                        <div className='DonateForm__form-input'>
                            <input 
                                type='number'
                                step='0.01'
                                id='donateAmount'
                                name='donateAmount' 
                                defaultValue={balance.toFixed(2)} // Pull from context
                                onChange={e => this.context.onDonateAmountChange(e.target.value)}
                            />
                        </div>
                        <div className='DonateForm__submit'> 
                            <Button type='submit' className='Button--contained-large'>
                                Give
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default withRouter(DonateForm)