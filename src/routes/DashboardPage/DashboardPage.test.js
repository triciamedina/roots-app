import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getDashboardPageWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in DashboardPage component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated DashboardPage module that now includes the mocked context
  return require('./DashboardPage').DashboardPage;
};

describe('<DashboardPage />', () => {
  it('renders without crashing', () => {
    const DashboardPage = getDashboardPageWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{DashboardPage}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});