import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getAccountSetupPageWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in AccountSetupPage component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated AccountSetupPage module that now includes the mocked context
  return require('./AccountSetupPage').AccountSetupPage;
};

describe('<AccountSetupPage />', () => {
  it('renders without crashing', () => {
    const AccountSetupPage = getAccountSetupPageWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{AccountSetupPage}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});