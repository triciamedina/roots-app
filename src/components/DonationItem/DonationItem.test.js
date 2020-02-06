import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DonationItem from './DonationItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><DonationItem 
        donated_on='2020-02-06T06:09:30.700Z'
        project_name='name'
        school_name='name'
        amount={0}
        image_url ='test'
    /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});