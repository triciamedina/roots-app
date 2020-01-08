import React, { Component } from 'react'
import './ProjectContent.css'
import { withRouter } from 'react-router-dom'
import RootsContext from '../../contexts/RootsContext'

class ProjectContent extends Component {
    static contextType = RootsContext
    render() {
        if (this.context.projects.showModal) {
            return null
        }
        const project = this.context.projects.results.proposals.filter(project => project.id === this.props.match.params.project_id)
        const { imageURL, title, shortDescription, teacherName, gradeLevel, schoolName, city, state } = project[0]
        return (
            <section className='ProjectContent'>
                <div className='ProjectContent__image'>
                    <img src={imageURL} alt='' />
                </div>
                <h1 className='ProjectContent__title'>
                    {title}
                </h1>
                <div className='ProjectContent__teacher-info-container'>
                    <p className='ProjectContent__teacher-name'>
                        {teacherName}
                    </p>
                    <p className='ProjectContent__age-group'>
                        {gradeLevel.name}
                    </p>
                    <p className='ProjectContent__school-name'>
                        {schoolName}
                    </p>
                    <p className='ProjectContent__city'>
                        {city}, {state}
                    </p>
                </div>
                <p className='ProjectContent__description'>
                    {shortDescription}
                </p>
            </section>
        )
    }
}

export default withRouter(ProjectContent)