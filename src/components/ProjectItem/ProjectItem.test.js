import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectItem from './ProjectItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ProjectItem /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});