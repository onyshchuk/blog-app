import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from './../../components/EditPostPage';
import posts from './../fixtures/posts';

let handleSaveClick, handleRemoveClick, history, post, wrapper;

beforeEach(() => {
   post = posts[1];
   handleSaveClick = jest.fn();
   handleRemoveClick = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<EditPostPage
      post={post} 
      handleSaveClick={handleSaveClick}
      handleRemoveClick={handleRemoveClick}
      history={history}
   />);
});

test('should render EditPostPage properly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle save click', () => {
   wrapper.find('PostForm')
          .prop('handleSaveClick')({
             title: 'new title'
          });
   expect(handleSaveClick).toHaveBeenLastCalledWith(post.id, { title: 'new title' });
   expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove click', () => {
   wrapper.find('PostForm')
          .prop('handleRemoveClick')(post.id);
   expect(handleRemoveClick).toHaveBeenLastCalledWith(post.id);
   expect(history.push).toHaveBeenLastCalledWith('/');
});