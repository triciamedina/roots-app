import React, { Component } from 'react'
import './BanksList.css'
import BankItem from '../BankItem/BankItem'
import RootsContext from '../../contexts/RootsContext'
import STORE from '../../store'

class BanksList extends Component {
    static contextType = RootsContext
    componentDidMount() {
        const { banks } = STORE
        this.context.updateBanks(banks)
    }
    render() {
        const { searchInput, results } = this.context.banks
        const filteredItems = searchInput.touched 
            ? results.filter(bank => bank.title.toLowerCase().includes(searchInput.value.toLowerCase()))
            : results
        const list = filteredItems.map(item => 
            <BankItem 
                key={item.id}
                title={item.title}
                image={item.img}
                id={item.id}
            />
        )
        return (
            <div className='BanksList'>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default BanksList