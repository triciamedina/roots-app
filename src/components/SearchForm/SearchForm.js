import React, { Component } from 'react';
import './SearchForm.css';
import { Button } from '../Utils/Utils';
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
            <div className='search-form__submit'>
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
                className='search-form'
                onSubmit={this.handleSubmit}
            >
                <h1 className='search-form__title'>
                    Find a classroom to support
                </h1>
                <div className='search-form__container'>
                    <div className='search-form__input'>
                        <label htmlFor='search'>
                            <span className='search-form__label'>
                                Zip
                            </span>
                        </label>
                        <input 
                            type='text' 
                            id='search' 
                            name='search'
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