import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data to test, or uses defaults
const getSearchResultsWithContext = (context = {}) => {
  
  // Mock the RootsContext module being used in SearchResults component
  jest.doMock('../../contexts/RootsContext', () => {
    return {
      RootsContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // Re-require after calling jest.doMock.
  // return the updated SearchResults module that now includes the mocked context
  return require('./SearchResults').SearchResults;
};

describe('<SearchResults />', () => {
  it('renders without crashing', () => {
    const SearchResults = getSearchResultsWithContext();
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>{SearchResults}</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});