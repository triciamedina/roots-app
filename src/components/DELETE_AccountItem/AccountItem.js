import React, { Component } from 'react'
import './AccountItem.css'
import RootsContext from '../../contexts/RootsContext'

class AccountItem extends Component {
    static contextType = RootsContext
    render() {
        const { title, number, id } = this.props
        return (
            <li>
                <button 
                    value={id}
                    className='AccountItem' 
                    onClick={e => this.context.updateSelectedAccount(e.currentTarget.value)}
                >
                    <div className='AccountItem__container'>
                        <p className='AccountItem__title'>{title}</p>
                        <p className='AccountItem__number'>{number}</p>
                    </div>
                    <i className='fas fa-chevron-right select'></i>
                </button>
            </li>
        )
    }
}

export default AccountItem