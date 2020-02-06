import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './ProjectItem.css';
import { Formatter } from '../Utils/Utils';
import PropTypes from 'prop-types';

function ProjectItem(props) {
    const { projectName, projectDescription, fundingNeeded, id } = props;

    return (
        <li className='ProjectItem'>
            <Link to={`/projects/${id}`} className='ProjectLink'>
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
            </Link>
        </li>
    )
};

ProjectItem.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    fundingNeeded: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default ProjectItem;