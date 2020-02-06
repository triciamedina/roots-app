import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getDonationsNotificationWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in DonationsNotification component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated DonationsNotification module that now includes the mocked context
  return require('./DonationsNotification').DonationsNotification;
};

describe('<DonationsNotification />', () => {
  it('renders without crashing', () => {
    const DonationsNotification = getDonationsNotificationWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{DonationsNotification}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});