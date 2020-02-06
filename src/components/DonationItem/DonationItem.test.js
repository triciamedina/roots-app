import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DonationItem from './DonationItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DonationItem /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});