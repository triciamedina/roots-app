import React from 'react'
import './DateList.css'

function DateList(props) {
    const { listItemType, items, className } = props
    const ListItemType = listItemType
    console.log(items)
    return (
        <ul className={className}>
            {items.map(item => 
                <ListItemType key={item.id} {...item}></ListItemType>
            )}
        </ul>
    )
}

export default DateList