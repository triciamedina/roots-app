import React from 'react';
import './ProjectDetailPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import ProjectContent from '../../components/ProjectContent/ProjectContent';
import DonateForm from '../../components/DonateForm/DonateForm';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

function ProjectDetailPage() {
    return (
        <>
            <SecondaryNav />
            <main className='ProjectDetailPage'>
                <ProjectContent />
                <DonateForm />
                <ConfirmationModal />
            </main>
        </>
    )
};

export default ProjectDetailPage;