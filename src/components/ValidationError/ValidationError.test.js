import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ValidationError from './ValidationError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ValidationError /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});