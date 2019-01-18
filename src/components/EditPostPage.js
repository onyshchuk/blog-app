import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from './../actions/posts';

const EditPostPage = props => {
   if(!props.post) return <Redirect to="/"/>

   const handleSaveClick = updates => {
      props.handleSaveClick(props.post.id, updates);
      props.history.push('/');
   };
   const handleRemoveClick = () => {
      props.handleRemoveClick(props.post.id);
      props.history.push('/');
   };
   return (
      <div>
         <div className="page-header">
            <div className="content-container">
               <h1 className="page-header__title">Edit Post</h1>
               <Link className="page-header__link" to={`/read/${props.post.id}`}>Post readable at .../read/{props.post.id}</Link>
            </div>
         </div>
         <div className="content-container">
            <PostForm 
               post={props.post}
               handleSaveClick={handleSaveClick} 
               handleRemoveClick={handleRemoveClick}
               readableLink={props.history.location.pathname}
            />
         </div>
      </div>
   );
}

const mapStateToProps = (state, props) => ({
   post: state.posts.find(post => post.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
   handleSaveClick: (id, updates) => dispatch(startEditPost(id, updates)),
   handleRemoveClick: id => dispatch(startRemovePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);