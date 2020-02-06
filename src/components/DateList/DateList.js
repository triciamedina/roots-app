import React from 'react';
import './DateList.css';
import PropTypes from 'prop-types'

function DateList(props) {
    const { listItemType, items, className } = props;
    const ListItemType = listItemType;

    return (
        <ul className={className}>
            {items.map(item => 
                <ListItemType key={item.id || item.transaction_id} {...item}></ListItemType>
            )}
        </ul>
    )
};

DateList.propTypes = {
    listItemType: PropTypes.elementType.isRequired,
    items: PropTypes.array.isRequired,
    className: PropTypes.string
};

export default DateList;