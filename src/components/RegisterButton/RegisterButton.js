import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'

function RegisterButton(props) {
    return (
        <Link to={'/register'}>
            <Button className={props.className}>Get started</Button>
        </Link>
    )
}

export default RegisterButton