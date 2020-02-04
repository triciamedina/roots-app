import React, { Component } from 'react';
import './SearchForm.css';
import { Button, Input } from '../Utils/Utils';
import RootsContext from '../../contexts/RootsContext';
import ValidationError from '../ValidationError/ValidationError';
import ValidationService from '../../services/validation-service';

class SearchForm extends Component {
    static contextType = RootsContext;

    handleSubmit = (event) => {
        event.preventDefault();
        this.context.handleSearchSubmit();
    };

    renderSubmitButton() {
        const { searchInput } = this.context.projects;

        return (
            <div className='SearchForm__submit'>
                <Button 
                    className='Button--contained-large'
                    type='submit'
                    disabled={ValidationService.validateProjectSearch(searchInput.value)}
                >
                    Search
                </Button>
            </div>
        )
    };

    componentDidMount() {
        this.context.updateDonateAmount();
    };

    render() {
        const { searchInput, showResults } = this.context.projects;

        return (
            <form 
                action=''
                className='SearchForm'
                onSubmit={this.handleSubmit}
            >
                <h1 className='SearchForm__title'>
                    Find a classroom to support
                </h1>
                <div className='SearchForm__container'>
                    <div className='SearchForm__input-container'>
                        <Input 
                            className='Input__search'
                            type='text' 
                            id='search' 
                            name='search'
                            placeholder='Zip code'
                            aria-label='Zip code'
                            aria-required
                            onChange={e => this.context.onSearchInputChange(e.target.value)}
                        />
                        {searchInput.touched &&
                        (<ValidationError 
                            message={ValidationService.validateProjectSearch(searchInput.value)} 
                        />)
                    }
                    </div>
                    {!showResults && this.renderSubmitButton()}
                </div>
            </form>
        )
    };
};

export default SearchForm;