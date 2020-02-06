import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getToggleModalWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in ToggleModal component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated ToggleModal module that now includes the mocked context
  return require('./ToggleModal').ToggleModal;
};

describe('<ToggleModal />', () => {
  it('renders without crashing', () => {
    const ToggleModal = getToggleModalWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{ToggleModal}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});