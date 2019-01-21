import { setTextFilter, sortByTitle, sortByDate } from './../../actions/filters';

// SET_TEXT_FILTER
test('should setup setTextFilter action', () => {
   const text = 'some filter text';
   const action = setTextFilter(text);
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
   });
});

// SORT_BY_TITLE
test('should setup sortByTitle action', () => {
   const action = sortByTitle();
   expect(action).toEqual({
      type: 'SORT_BY_TITLE'
   });
});

// SORT_BY_DATE
test('should setup sortByDate action', () => {
   const action = sortByDate();
   expect(action).toEqual({
      type: 'SORT_BY_DATE'
   });
});