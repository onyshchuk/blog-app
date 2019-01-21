import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';

export const PostsListFilters = props => {
   const handleTextFilterChange = e => {
      props.handleTextFilterChange(e.target.value);
   };
   const handleSortByChange = e => {
      e.target.value === 'title' ? props.handleSortByTitle() : props.handleSortByDate();
   };
   return (
      <div>
         <div className="page-header">
            <div className="content-container">
               <h1 className="page-header__title">Published posts</h1>
            </div>
         </div> 
         <div className="content-container">
            <div className="input-group">
               <div className="input-group__item">
                  <input
                     className="text-input"
                     type="text"
                     placeholder="Search posts"
                     onChange={handleTextFilterChange} 
                  />
               </div>
               <div className="input-group__item">
                  <select
                     className="select"
                     value={props.filters.sortBy}
                     onChange={handleSortByChange}
                  >
                     <option value="title">title</option>
                     <option value="date">date</option>
                  </select>
               </div>
               <div className="input-group__item">
                  <Link className="button" to="/create">Add post</Link>
               </div>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = state => ({
   filters: state.filters
});

const mapDispatchToProps = dispatch => ({
   handleTextFilterChange: text => dispatch(setTextFilter(text)),
   handleSortByDate: () => dispatch(sortByDate()),
   handleSortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListFilters);