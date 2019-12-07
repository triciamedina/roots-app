import React from 'react'
import './ProjectsPage.css' 
import { Button } from '../../components/Utils/Utils'

function ProjectsPage() {
    return (
        <main className='projects-search'>
            <form action='' className='search-form'>
                <h1 className='search-form__title'>Find a classroom to support</h1>
                <div className='search-form__container'>
                    <div className='search-form__input'>
                        <label htmlFor='search'>
                            <span className='search-form__label'>City, State, or Zip </span>
                        </label>
                        <input type='text' id='search' name='search' />
                    </div>
                    <div className='search-form__submit'>
                        <Button className='Button--contained-large' type='submit'>
                            Search
                        </Button>
                    </div>
                </div>
            </form>
         </main>
    )
}

export default ProjectsPage