import React from 'react';
import './ValidationError.css';
import PropTypes from 'prop-types';

function ValidationError(props) {
    if (props.message) {
        return (
            <div className='ValidationError'>{props.message}</div>
        )
    };

    return <></>
};

ValidationError.propTypes = {
   message: PropTypes.string,
};

export default ValidationError;