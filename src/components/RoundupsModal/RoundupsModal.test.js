import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getRoundupsModalWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in RoundupsModal component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated RoundupsModal module that now includes the mocked context
  return require('./RoundupsModal').RoundupsModal;
};

describe('<RoundupsModal />', () => {
  it('renders without crashing', () => {
    const RoundupsModal = getRoundupsModalWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{RoundupsModal}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});