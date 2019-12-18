import React, { Component } from 'react'
import './ProjectsList.css'
import STORE from '../../store'
import ProjectItem from '../ProjectItem/ProjectItem.js'
import RootsContext from '../../contexts/RootsContext'

class ProjectsList extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const items = STORE.projects
        this.context.updateProjectResults(items)
    }
    render() {
        const items = this.context.projects.results.map(item => 
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
}

export default ProjectsList