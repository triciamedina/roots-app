import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import DashboardPage from './DashboardPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DashboardPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
