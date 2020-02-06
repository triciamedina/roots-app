import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DateList from './DateList';
import TransactionItem from '../TransactionItem/TransactionItem'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <DateList 
            listItemType={TransactionItem} 
            items={[]}
            className=''
        />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});