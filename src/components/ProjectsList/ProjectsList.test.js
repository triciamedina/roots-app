import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getProjectsListWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in ProjectsList component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated ProjectsList module that now includes the mocked context
  return require('./ProjectsList').ProjectsList;
};

describe('<ProjectsList />', () => {
  it('renders without crashing', () => {
    const ProjectsList = getProjectsListWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{ProjectsList}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});