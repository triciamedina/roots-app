import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';
import PropTypes from 'prop-types';

function PublicOnlyRoute({ component, hasAuthToken=TokenService.hasAuthToken(), ...props }) {
    const Component = component;

    return (
        <Route 
            {...props}
            render={componentProps => (
                component && (hasAuthToken
                ? <Redirect to={'/dashboard'} />
                : <Component {...componentProps} />
            ))}
        />
    )
};

PublicOnlyRoute.propTypes = {
    component: PropTypes.elementType,
    hasAuthToken: PropTypes.bool,
};

export default PublicOnlyRoute;