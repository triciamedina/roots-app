import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getSecondaryNavWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in SecondaryNav component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated SecondaryNav module that now includes the mocked context
  return require('./SecondaryNav').SecondaryNav;
};

describe('<SecondaryNav />', () => {
  it('renders without crashing', () => {
    const SecondaryNav = getSecondaryNavWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{SecondaryNav}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});