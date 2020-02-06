import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getConfirmationWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in Confirmation component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated Confirmation module that now includes the mocked context
  return require('./Confirmation').Confirmation;
};

describe('<Confirmation />', () => {
  it('renders without crashing', () => {
    const Confirmation = getConfirmationWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{Confirmation}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});