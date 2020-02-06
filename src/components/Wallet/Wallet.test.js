import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getWalletWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in Wallet component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated Wallet module that now includes the mocked context
  return require('./Wallet').Wallet;
};

describe('<Wallet />', () => {
  it('renders without crashing', () => {
    const Wallet = getWalletWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{Wallet}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});