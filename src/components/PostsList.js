import React from 'react';
import { connect } from 'react-redux'; 
import PostListitem from './PostListItem';
import selectPosts from './../selectors/posts';

const PostsList = props => {
   const posts = props.posts ? props.posts : [];
   const selectedPosts = selectPosts(posts, props.filters);
   return (
      <div className="content-container">
         <div className="list-body">
            {
               selectedPosts.length === 0 ? (
                  <div className="list-item list-item--message">
                     <span>No items</span>
                  </div>
               ) : (
                  selectedPosts.map(post => <PostListitem key={post.id} id={post.id} item={post} />)
               )
            }
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   posts: state.posts,
   filters: state.filters
});

export default connect(mapStateToProps)(PostsList);