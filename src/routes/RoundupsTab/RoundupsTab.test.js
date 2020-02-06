import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getRoundupsTabWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in RoundupsTab component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated RoundupsTab module that now includes the mocked context
  return require('./RoundupsTab').RoundupsTab;
};

describe('<RoundupsTab />', () => {
  it('renders without crashing', () => {
    const RoundupsTab = getRoundupsTabWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{RoundupsTab}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});