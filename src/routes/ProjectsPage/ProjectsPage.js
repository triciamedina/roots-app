import React from 'react'
import './ProjectsPage.css' 
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'
import SearchForm from '../../components/SearchForm/SearchForm'
import SearchResults from '../../components/SearchResults/SearchResults'

function ProjectsPage() {
    return (
        <>
            <SecondaryNav />
            <main className='projects-search'>
                <SearchForm />
                <SearchResults />
            </main>
        </>
    )
}

export default ProjectsPage