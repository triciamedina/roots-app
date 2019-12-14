import React from 'react'
import './ProjectContent.css'
import { withRouter } from 'react-router-dom'
import STORE from '../../store'

function ProjectContent(props) {
    const project = STORE.projects.filter(project => project.id === parseInt(props.match.params.project_id))
    const { image, projectName, projectDescription, schoolInfo } = project[0]
    return (
        <section className='ProjectContent'>
            <div className='ProjectContent__image'>
                <img src={image} alt='' />
            </div>
            <h1 className='ProjectContent__title'>
                {projectName}
            </h1>
            <div className='ProjectContent__teacher-info-container'>
                <p className='ProjectContent__teacher-name'>
                    {schoolInfo.teacherName}
                </p>
                <p className='ProjectContent__age-group'>
                    {schoolInfo.ageGroup}
                </p>
                <p className='ProjectContent__school-name'>
                    {schoolInfo.schoolName}
                </p>
                <p className='ProjectContent__city'>
                    {schoolInfo.location}
                </p>
            </div>
            <p className='ProjectContent__description'>
                {projectDescription}
            </p>
        </section>
    )
}

export default withRouter(ProjectContent)