import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getRoundupsToggleWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in RoundupsToggle component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated RoundupsToggle module that now includes the mocked context
  return require('./RoundupsToggle').RoundupsToggle;
};

describe('<RoundupsToggle />', () => {
  it('renders without crashing', () => {
    const RoundupsToggle = getRoundupsToggleWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{RoundupsToggle}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});