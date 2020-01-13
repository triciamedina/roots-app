import React from 'react'
import './DateList.css'

function DateList(props) {
    const { listItemType, items, className, id } = props
    const ListItemType = listItemType
    return (
        <ul key={id} className={className}>
            {items.map(item => 
                <ListItemType key={item.id} {...item}></ListItemType>
            )}
        </ul>
    )
}

export default DateList