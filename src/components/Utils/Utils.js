import React from 'react'
import './Utils.css'

export function Button(props) {
    return <button className={props.className}>{props.children}</button>
}