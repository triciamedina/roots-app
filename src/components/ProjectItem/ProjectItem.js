import React from 'react'
import './ProjectItem.css'

function ProjectItem(props) {
    const { projectName, projectDescription, fundingNeeded } = props
    return (
        <li className='ProjectItem'>
            <div className='ProjectItem__container'>
                <p className='ProjectItem__project-name'>{projectName}</p>
                <div className='truncate-overflow'>
                    <p className='ProjectItem__project-description'>“{projectDescription}”</p>
                </div>
                <p className='ProjectItem__amount'>{fundingNeeded} still needed</p>
            </div>
        </li>
    )
}

export default ProjectItem