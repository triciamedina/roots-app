import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getUtilsWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in Utils component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated Utils module that now includes the mocked context
  return require('./Utils').Utils;
};

describe('<Utils />', () => {
  it('renders without crashing', () => {
    const Utils = getUtilsWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{Utils}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});