import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getTransactionItemWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in TransactionItem component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated TransactionItem module that now includes the mocked context
  return require('./TransactionItem').TransactionItem;
};

describe('<TransactionItem />', () => {
  it('renders without crashing', () => {
    const TransactionItem = getTransactionItemWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{TransactionItem}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});