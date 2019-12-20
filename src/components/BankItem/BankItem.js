import React from 'react'
import './BankItem.css'

function BankItem(props) {
    const { title, image } = props
    return (
        <li>
            <button className='BankItem'>
                <img src={image} alt='' className='BankItem__image'/>
                <p className='BankItem__title'>
                    {title}
                </p>
                <i className='fas fa-chevron-right select'></i>
            </button>
        </li>
    )
}

export default BankItem