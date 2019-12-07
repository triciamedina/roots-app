import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'

function LoginButton(props) {
    return (
        <Link to={`/login`}>
            <Button className={props.className}>Sign in</Button>
        </Link>
    )
}

export default LoginButton