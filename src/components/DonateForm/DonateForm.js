import React, { Component } from 'react';
import './DonateForm.css';
import { Button, Formatter } from '../Utils/Utils';
import { withRouter } from 'react-router-dom';
import RootsContext from '../../contexts/RootsContext';

class DonateForm extends Component {
    static contextType = RootsContext;
    
    handleSubmit = (event) => {
        const project = this.context.projects.results.proposals.filter(project => 
            project.id === this.props.match.params.project_id
        );

        event.preventDefault();

        setTimeout(() => {
            window.open(project[0].proposalURL)}, 2000);
            
        this.context.handleOpenModal(project);
    };

    render() {
        if (this.context.projects.showModal) {
            return null
        };

        const project = this.context.projects.results.proposals.filter(project => 
            project.id === this.props.match.params.project_id
        );

        const { costToComplete, totalPrice } = project[0];

        const { balance } = this.context.wallet;

        return (
            <section className='DonateForm'>
                <div className='DonateForm__slide-container'>
                    <div className='DonateForm__slide-caption-container'>
                        <p className='DonateForm__funding-balance'>
                            {Formatter.format(costToComplete)} still needed
                        </p>
                        <p className='DonateForm__funding-goal'>
                            {Formatter.format(totalPrice)} goal
                        </p>
                    </div>
                    <input 
                        type='range' 
                        min='1' 
                        max={totalPrice} 
                        value={totalPrice - costToComplete} 
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
                                defaultValue={balance}
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
    };
};

export default withRouter(DonateForm);