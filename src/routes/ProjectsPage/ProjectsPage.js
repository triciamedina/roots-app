import React, { Component } from 'react';
import './ProjectsPage.css';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';
import RootsContext from '../../contexts/RootsContext'

class ProjectsPage extends Component {
    static contextType = RootsContext;

    componentDidMount() {
       const projects = JSON.parse(localStorage.getItem('projects'))
       if (projects) {
           this.context.updateProjects(projects)
       }
    }
    render() {
        return (
            <>
                <SecondaryNav />
                <main className='ProjectsPage'>
                    <SearchForm />
                    <SearchResults />
                </main>
            </>
        )
    }
};

export default ProjectsPage;