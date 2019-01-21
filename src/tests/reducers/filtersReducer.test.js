import filtersReducer from './../../reducers/filtersReducer';

test('should setup default state', () => {
   const state = filtersReducer(undefined, '@@INIT');
   expect(state).toEqual({
      text: '',
      sortBy: 'title'
   });
});

test('should setup text filter', () => {
   const action = { 
      type: 'SET_TEXT_FILTER', 
      text: 'some filter'
   };
   const state = filtersReducer(undefined, action);
   expect(state.text).toBe('some filter');
});

test('should setup sortByTitle', () => {
   const action = { type: 'SORT_BY_TITLE' };
   const state = filtersReducer({ sortBy: '' }, action);
   expect(state.sortBy).toBe('title');
});

test('should setup sortByDate', () => {
   const action ={ type: 'SORT_BY_DATE' };
   const state = filtersReducer(undefined, action);
   expect(state.sortBy).toBe('date');
});