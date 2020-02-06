import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getProjectsPageWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in ProjectsPage component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated ProjectsPage module that now includes the mocked context
  return require('./ProjectsPage').ProjectsPage;
};

describe('<ProjectsPage />', () => {
  it('renders without crashing', () => {
    const ProjectsPage = getProjectsPageWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{ProjectsPage}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});