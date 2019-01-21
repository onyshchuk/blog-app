import React from 'react';
import { shallow } from 'enzyme';
import { AddPostPage } from './../../components/AddPostPage';
import posts from './../fixtures/posts';

let handleSaveClick, history, wrapper;

beforeEach(() => {
   handleSaveClick = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<AddPostPage handleSaveClick={handleSaveClick} history={history} />);
});

test('should render AddPostPage properly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle form subbmit', () => {
   wrapper.find('PostForm').prop('handleSaveClick')(posts[0]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(handleSaveClick).toHaveBeenLastCalledWith(posts[0]);
});