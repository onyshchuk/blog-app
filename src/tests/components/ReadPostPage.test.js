import React from 'react';
import { shallow } from 'enzyme';
import { ReadPostPage } from './../../components/ReadPostPage';
import posts from './../fixtures/posts';

test('shoud render ReadPostPage properly', () => {
   const wrapper = shallow(<ReadPostPage post={posts[1]} />);
   expect(wrapper).toMatchSnapshot();
});