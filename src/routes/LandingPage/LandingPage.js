import React from 'react'
import { RegisterButton } from '../../components/Utils/Utils'
import MainNav from '../../components/MainNav/MainNav'
import './LandingPage.css'

function LandingPage() {
    return (
        <>
            <MainNav />
            <main className='landing-page'>
                <section className='hero section--dark'>
                    <div className='text-container left'>
                        <h1 className='hero__title'>Invest in a future for everyone</h1>
                        <p className='hero__body'>We make it easy for anyone to give back to their community.</p>
                        <RegisterButton className='Button--contained-small' />
                    </div>
                    <div className='image-container'>
                        <img className='hero__image' src='https://dummyimage.com/295x360/cccccc/909090.png&text=placeholder' alt=''/>
                    </div>
                </section>
                <section className='secondary'>
                    <div className='text-container left'>
                        <h2 className='secondary__title'>Round up credit & debit purchases.</h2>
                        <p className='secondary__body'>We’ll take the leftover change from your card purchases and help you invest it back where it matters.</p>
                    </div>
                    <div className='image-container'>
                        <img className='secondary__image' src='https://dummyimage.com/295x360/cccccc/909090.png&text=placeholder' alt=''/>
                    </div>
                </section>
                <section className='secondary section--dark'>
                    <div className='text-container right'>
                        <h2 className='secondary__title'>Search for classroom projects in need.</h2>
                        <p className='secondary__body'>Connect with classroom projects in your area that would benefit from a donation of any size.</p>
                    </div>
                    <div className='image-container'>
                        <img className='secondary__image' src='https://dummyimage.com/295x360/cccccc/909090.png&text=placeholder' alt=''/>
                    </div>
                </section>
                <section className='secondary'>
                    <div className='text-container left'>
                        <h2 className='secondary__title'>Support a classroom in your community.</h2>
                        <p className='secondary__body'>Make a direct impact on public school children in your area by investing in resources they need for a strong future.</p>
                    </div>
                    <div className='image-container'>
                        <img className='secondary__image' src='https://dummyimage.com/295x360/cccccc/909090.png&text=placeholder' alt=''/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default LandingPage