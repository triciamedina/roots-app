import React, { Component } from 'react'
import './BankSearch.css'
import RootsContext from '../../contexts/RootsContext'

class BankSearch extends Component {
    static contextType = RootsContext
    render() {
        return (
            <div className='BankSearch__input'>
                <label htmlFor='bankSearch'>
                    <span className='BankSearch__title'>
                        Search
                    </span>
                </label>
                <input 
                    type='text' 
                    id='bankSearch'
                    name='bankSearch' 
                    onChange={e => this.context.onBankSearchChange(e.target.value)}
                />
            </div>
        )
    }
}

export default BankSearch