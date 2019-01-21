import React from 'react';
import { shallow } from 'enzyme';
import { PostListItem } from './../../components/PostListItem';
import posts from './../fixtures/posts';

test('should render PostListItem properly', () => {
   const wrapper = shallow(<PostListItem {...posts[1]} />);
   expect(wrapper).toMatchSnapshot();
});