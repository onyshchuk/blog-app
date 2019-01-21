import React from 'react';
import { shallow } from 'enzyme';
import { PostsList } from './../../components/PostsList';
import posts from './../fixtures/posts';

test('should render PostsList properly with empty list', () => {
   const wrapper = shallow(<PostsList
      filters={{ text: 'some filter', sortBy: 'title' }}
   />);
   expect(wrapper).toMatchSnapshot();
});

test('should render PostsList properly with filled list', () => {
   const wrapper = shallow(<PostsList
      posts={posts}
      filters={{ text: '', sortBy: 'title' }}
   />);
   expect(wrapper).toMatchSnapshot();
});