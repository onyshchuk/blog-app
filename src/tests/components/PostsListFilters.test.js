import React from 'react';
import { shallow } from 'enzyme';
import { PostsListFilters } from './../../components/PostsListFilters';

let handleTextFilterChange, handleSortByDate, handleSortByTitle, filters, wrapper;

beforeEach(() => {
   handleTextFilterChange = jest.fn();
   handleSortByDate = jest.fn();
   handleSortByTitle = jest.fn();
   filters = {
      text: '',
      sotBy: 'title'
   }
   wrapper = shallow(<PostsListFilters 
      filters={filters}
      handleTextFilterChange={handleTextFilterChange}
      handleSortByDate={handleSortByDate}
      handleSortByTitle={handleSortByTitle}
   />);
});

test('should render PostsListFilters properly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle text change in filter input', () => {
   const value = 'some filter'
   wrapper.find('input').simulate('change', { target: { value } });
   expect(handleTextFilterChange).toHaveBeenLastCalledWith(value);
});

test('should handle sortBy filter change to title', () => {
   const value = 'title';
   wrapper.find('select').simulate('change', { target: { value } });
   expect(handleSortByTitle).toHaveBeenCalled();
});

test('should handle sortBy filter change to date', () => {
   const value = 'date';
   wrapper.find('select').simulate('change', { target: { value } });
   expect(handleSortByDate).toHaveBeenCalled();
});