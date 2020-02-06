import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Logo from './Logo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Logo /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});