import React from 'react'
import './ProjectsPage.css' 
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'
import ProjectsSearchForm from '../../components/ProjectsSearchForm/ProjectsSearchForm'

function ProjectsPage() {
    return (
        <>
            <SecondaryNav />
            <main className='projects-search'>
                <ProjectsSearchForm />
            </main>
        </>
    )
}

export default ProjectsPage