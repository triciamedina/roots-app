import React, { Component } from 'react';
import './ProjectDetailPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import ProjectContent from '../../components/ProjectContent/ProjectContent';
import DonateForm from '../../components/DonateForm/DonateForm';
import Confirmation from '../../components/Confirmation/Confirmation';
import RootsContext from '../../contexts/RootsContext'

class ProjectDetailPage extends Component {
    static contextType = RootsContext;

    componentDidMount() {
        this.context.updateWallet();
        const projects = JSON.parse(localStorage.getItem('projects'));

        if (projects) {
            this.context.updateProjects(projects)
        };

        
    }

    render() {
        const { projects } = this.context
        return (
            <>
                <SecondaryNav />
                <main className='ProjectDetailPage'>
                    <ProjectContent projects={projects} />
                    <DonateForm />
                    <Confirmation />
                </main>
            </>
        )
    }

};

export default ProjectDetailPage;