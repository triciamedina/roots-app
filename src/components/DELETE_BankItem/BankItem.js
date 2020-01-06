import React, { Component } from 'react'
import './BankItem.css'
import RootsContext from '../../contexts/RootsContext'

class BankItem extends Component {
    static contextType = RootsContext
    render() {
        const { title, image, id } = this.props
        return (
            <li>
                <button 
                    value={id} 
                    className='BankItem'
                    onClick={e => this.context.updateSelectedBank(e.currentTarget.value)}
                >
                    <img src={image} alt='' className='BankItem__image'/>
                    <p className='BankItem__title'>
                        {title}
                    </p>
                    <i className='fas fa-chevron-right select'></i>
                </button>
            </li>
        )
    }
}

export default BankItem