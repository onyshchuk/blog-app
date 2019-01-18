import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, item: { title, body, createdAt } }) => (
   <Link className="list-item" to={`/edit/${id}`}>
      <div>
         <h3 className="list-item__title">{title}</h3> 
         <span className="list-item__sub-title">{body.length < 50 ? body : body.slice(0, 49) + '...'}</span> 
      </div>
      <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
   </Link>
);

export default PostListItem;