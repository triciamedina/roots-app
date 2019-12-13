import React, { Component } from 'react'
import './SearchForm.css'
import { Button } from '../Utils/Utils'
import RootsContext from '../../contexts/RootsContext'

class SearchForm extends Component {
    static contextType = RootsContext
    handleSubmit = (event) => {
        event.preventDefault()
        this.context.handleSearchSubmit()
    }
    renderSubmitButton() {
        return (
            <div className='search-form__submit'>
                <Button className='Button--contained-large' type='submit'>
                    Search
                </Button>
            </div>
        )
    }
    render() {
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
                                City, State, or Zip
                            </span>
                        </label>
                        <input 
                            type='text' 
                            id='search' 
                            name='search'
                            aria-required
                            onChange={e => this.context.onSearchInputChange(e.target.value)}
                        />
                    </div>
                    {!this.context.projects.showResults && this.renderSubmitButton()}
                </div>
            </form>
        )
    }
}

export default SearchForm