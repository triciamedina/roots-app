import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getDonateFormWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in DonateForm component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated DonateForm module that now includes the mocked context
  return require('./DonateForm').DonateForm;
};

describe('<DonateForm />', () => {
  it('renders without crashing', () => {
    const DonateForm = getDonateFormWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{DonateForm}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});