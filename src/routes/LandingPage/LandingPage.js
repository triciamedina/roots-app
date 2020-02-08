import React, { Component } from 'react';
import { RegisterButton, Button } from '../../components/Utils/Utils';
import MainNav from '../../components/MainNav/MainNav';
import './LandingPage.css';
import Screen from '../../img/screen@2x.png';
import CreditCard from '../../img/credit-card.svg';
import Location from '../../img/location.svg';
import Leaf from '../../img/leaf.svg';
import RootsContext from '../../contexts/RootsContext'

class LandingPage extends Component {
    static contextType = RootsContext;

    handleDemoLogin = () => {
        const demoEmail = 'test@test.com';
        const demoPass = 'mypassword01'
        this.context.handleSubmitJwtAuth(demoEmail, demoPass);
    };

    render() {
        return (
            <>
                <MainNav />
                <main className='landing-page'>
                    <section className='hero section--dark'>
                        <section className='text-container left'>
                            <h2 className='hero__title'>Invest in a future for everyone</h2>
                            <p className='hero__body'>We make it easy for anyone to give back to their community.</p>
                            <div className='hero__cta-group'>
                                <RegisterButton className='Button--contained-small' />
                                <Button 
                                    className='Button--text-small'
                                    onClick={this.handleDemoLogin}
                                >
                                    Try a demo
                                </Button>
                            </div>
                        </section>
                        <section className='image-container'>
                            <img className='hero__image' src={Screen} alt=''/>
                        </section>
                    </section>
                    <section className='secondary first'>
                        <section className='text-container left'>
                            <h2 className='secondary__title'>Round up credit & debit purchases.</h2>
                            <p className='secondary__body'>We’ll take the leftover change from your card purchases and help you invest it back where it matters.</p>
                        </section>
                        <section className='image-container'>
                            <img className='secondary__image' src={CreditCard} alt=''/>
                        </section>
                    </section>
                    <section className='secondary section--dark'>
                        <section className='text-container right'>
                            <h2 className='secondary__title'>Search for classroom projects in need.</h2>
                            <p className='secondary__body'>Connect with classroom projects in your area that would benefit from a donation of any size.</p>
                        </section>
                        <section className='image-container'>
                            <img className='secondary__image' src={Location} alt=''/>
                        </section>
                    </section>
                    <section className='secondary'>
                        <section className='text-container left'>
                            <h2 className='secondary__title'>Support a classroom in your community.</h2>
                            <p className='secondary__body'>Make a direct impact on public school children in your area by investing in resources they need for a strong future.</p>
                        </section>
                        <section className='image-container'>
                            <img className='secondary__image' src={Leaf} alt=''/>
                        </section>
                    </section>
                </main>
                <footer>
                    <Button
                        className='Button--contained-small demo'
                        onClick={this.handleDemoLogin}
                    >
                        Try a demo
                    </Button>
                </footer>
            </>
        )
    }
};

export default LandingPage;