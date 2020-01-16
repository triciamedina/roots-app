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
        return (
            <section className='SearchResults'>
                {this.context.projects.showResults && this.renderResults()}
            </section>
        )
    };
};

export default SearchResults;