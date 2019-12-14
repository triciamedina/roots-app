import React from 'react'
import './ProjectDetailPage.css'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav'
import ProjectContent from '../../components/ProjectContent/ProjectContent'
import DonateForm from '../../components/DonateForm/DonateForm'

function ProjectDetailPage() {
    return (
        <>
            <SecondaryNav />
            <main className='ProjectDetailPage'>
                <ProjectContent />
                <DonateForm />
            </main>
        </>
    )
}

export default ProjectDetailPage