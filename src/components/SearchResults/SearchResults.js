import React, { Component } from 'react';
import './SearchResults.css';
import RootsContext from '../../contexts/RootsContext';
import ProjectsList from  '../ProjectsList/ProjectsList';

class SearchResults extends Component {
    static contextType = RootsContext;

    renderResults() {
        return(
            <div className='SearchResults__list'>
                <ProjectsList />
            </div>
        )
    };

    render() {
        const { showResults } = this.context.projects
        return (
            <section className='SearchResults'>
                {showResults && this.renderResults()}
            </section>
        )
    };
};

export default SearchResults;