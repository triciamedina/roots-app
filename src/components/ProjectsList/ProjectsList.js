import React from 'react'
import './ProjectsList.css'
import STORE from '../../store'
import ProjectItem from '../ProjectItem/ProjectItem.js'

function ProjectsList() {
    const items = STORE.projects.map(item => 
        <ProjectItem
            key={item.id}
            projectName={item.projectName}
            projectDescription={item.projectDescription}
            fundingNeeded={item.funding.stillNeeded}
            id={item.id}
        />
    )
    return (
        <ul className='ProjectsList'>
            {items}
        </ul>
    )
}

export default ProjectsList