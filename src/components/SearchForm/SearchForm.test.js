import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getSearchFormWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in SearchForm component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated SearchForm module that now includes the mocked context
  return require('./SearchForm').SearchForm;
};

describe('<SearchForm />', () => {
  it('renders without crashing', () => {
    const SearchForm = getSearchFormWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{SearchForm}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});