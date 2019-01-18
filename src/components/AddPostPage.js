import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/posts';

const AddPostPage = props => {
   const handleSaveClick = post => {
      props.handleSaveClick(post);
      props.history.push('/');
   }
   return (
      <div>
         <div className="page-header">
            <div className="content-container">
               <h1 className="page-header__title">Add Post</h1>
            </div>
         </div>
         <div className="content-container">
            <PostForm handleSaveClick={handleSaveClick} />
         </div>
      </div>
   );
}

const mapDispatchToProps = dispatch => ({
   handleSaveClick: post => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);