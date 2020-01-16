import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './ProjectItem.css';
import { Formatter } from '../Utils/Utils';

function ProjectItem(props) {
    const { projectName, projectDescription, fundingNeeded, id } = props;

    return (
        <Link to={`/projects/${id}`} className='ProjectLink'>
            <li className='ProjectItem'>
                <div className='ProjectItem__container'>
                    <p className='ProjectItem__project-name'>
                        {ReactHtmlParser(projectName)}
                    </p>
                    <div className='truncate-overflow'>
                        <p className='ProjectItem__project-description'>
                            “{ReactHtmlParser(projectDescription)}”
                        </p>
                    </div>
                    <p className='ProjectItem__amount'>
                        {Formatter.format(fundingNeeded)} still needed
                    </p>
                </div>
            </li>
        </Link>
    )
};

export default ProjectItem;