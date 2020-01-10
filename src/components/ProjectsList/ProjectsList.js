import React, { Component } from 'react'
import './ProjectsList.css'
import ProjectItem from '../ProjectItem/ProjectItem.js'
import RootsContext from '../../contexts/RootsContext'

class ProjectsList extends Component {
    static contextType = RootsContext
    render() {
        const items = this.context.projects.results.proposals.map(proposal => 
            <ProjectItem
                key={proposal.id}
                projectName={proposal.title}
                projectDescription={proposal.fulfillmentTrailer}
                fundingNeeded={proposal.costToComplete}
                id={proposal.id}
            />
        )
        return (
            <ul className='ProjectsList'>
                {items}
            </ul>
        )
    }
}

export default ProjectsList