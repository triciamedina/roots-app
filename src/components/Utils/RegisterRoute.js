import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

function RegisterRoute({ component, hasAuthToken=TokenService.hasAuthToken(), ...props }) {
    const Component = component;

    return (
        <Route 
            {...props}
            render={componentProps => (
                component && (hasAuthToken
                ? <Redirect to={'/account-setup'} />
                : <Component {...componentProps} />
            ))}
        />
    )
};

export default RegisterRoute;