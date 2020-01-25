import React, { Component } from 'react';
import './ProjectContent.css';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import RootsContext from '../../contexts/RootsContext';



class ProjectContent extends Component {
    static contextType = RootsContext;

    render() {
        if (this.context.projects.showModal) {
            return null
        };

        const { projects } = this.props;
        const defaultProjects = JSON.parse(localStorage.getItem('projects'))

        const proposals = projects.results.proposals || defaultProjects.results.proposals;

        const project = proposals.filter(project => 
            project.id === this.props.match.params.project_id
            );
        
        const { 
            imageURL,
            title,
            synopsis,
            teacherName, 
            gradeLevel, 
            schoolName, 
            city, 
            state 
        } = project[0];
        
        return (
            <section className='ProjectContent'>
                <div className='ProjectContent__intro'>
                    <div className='ProjectContent__image'>
                        <img src={imageURL} alt='' />
                    </div>
                    <div>
                        <h1 className='ProjectContent__title'>
                            {ReactHtmlParser(title)}
                        </h1>
                        <div className='ProjectContent__teacher-info-container'>
                            <p className='ProjectContent__teacher-name'>
                                {ReactHtmlParser(teacherName)}
                            </p>
                            <p className='ProjectContent__age-group'>
                                {ReactHtmlParser(gradeLevel.name)}
                            </p>
                            <p className='ProjectContent__school-name'>
                                {ReactHtmlParser(schoolName)}
                            </p>
                            <p className='ProjectContent__city'>
                                {city}, {state}
                            </p>
                        </div>
                    </div>
                </div>
                <p className='ProjectContent__description'>
                    {ReactHtmlParser(ReactHtmlParser(synopsis))}
                </p>
                
            </section>
        )
    };
};

export default withRouter(ProjectContent);