import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

function PrivateRoute({ component, hasAuthToken=TokenService.hasAuthToken() , ...props }) {
    const Component = component;

    return (
        <Route 
            {...props}
            render={componentProps => (
                component && (hasAuthToken
                ?  <Component {...componentProps} />
                : <Redirect 
                    to={{
                        pathname: '/login',
                        state: { from: componentProps.location }
                    }}
                />)
            )}
        />
    )
};

export default PrivateRoute;