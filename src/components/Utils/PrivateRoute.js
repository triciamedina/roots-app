import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';
import PropTypes from 'prop-types';

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

PrivateRoute.propTypes = {
    component: PropTypes.elementType,
    hasAuthToken: PropTypes.bool,
};

export default PrivateRoute;