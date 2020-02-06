import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getProjectDetailPageWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in ProjectDetailPage component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated ProjectDetailPage module that now includes the mocked context
  return require('./ProjectDetailPage').ProjectDetailPage;
};

describe('<ProjectDetailPage />', () => {
  it('renders without crashing', () => {
    const ProjectDetailPage = getProjectDetailPageWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{ProjectDetailPage}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});