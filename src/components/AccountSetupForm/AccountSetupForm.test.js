import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getAccountSetupFormWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in AccountSetupForm component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated AccountSetupForm module that now includes the mocked context
  return require('./AccountSetupForm').AccountSetupForm;
};

describe('<AccountSetupForm />', () => {
  it('renders without crashing', () => {
    const AccountSetupForm = getAccountSetupFormWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{AccountSetupForm}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});