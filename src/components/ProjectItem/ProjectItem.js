import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectItem.css'

function ProjectItem(props) {
    const { projectName, projectDescription, fundingNeeded, id } = props
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        })
    return (
        <Link to={`/projects/${id}`} className='ProjectLink'>
            <li className='ProjectItem'>
                <div className='ProjectItem__container'>
                    <p className='ProjectItem__project-name'>{projectName}</p>
                    <div className='truncate-overflow'>
                        <p className='ProjectItem__project-description'>“{projectDescription}”</p>
                    </div>
                    <p className='ProjectItem__amount'>{formatter.format(fundingNeeded)} still needed</p>
                </div>
            </li>
        </Link>
    )
}

export default ProjectItem