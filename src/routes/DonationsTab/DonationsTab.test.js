import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getDonationsTabWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in DonationsTab component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated DonationsTab module that now includes the mocked context
  return require('./DonationsTab').DonationsTab;
};

describe('<DonationsTab />', () => {
  it('renders without crashing', () => {
    const DonationsTab = getDonationsTabWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{DonationsTab}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});