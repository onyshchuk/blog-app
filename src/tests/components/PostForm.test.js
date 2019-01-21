import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './../../components/PostForm';
import posts from './../fixtures/posts';

test('should render PostFrom for AddPage with default values properly', () => {
   const wrapper = shallow(<PostForm />);
   expect(wrapper).toMatchSnapshot();
});

test('should render PostForm for EditPage with post data properly with remove button', () => {
   const wrapper = shallow(<PostForm handleRemoveClick={() => {}} post={posts[2]} />);
   expect(wrapper).toMatchSnapshot();
});

test('should handle Title change properly', () => {
   const wrapper = shallow(<PostForm />);
   const value = 'new title';
   wrapper.find('input').simulate('change', { target: { value } });
   expect(wrapper.state('title')).toBe(value);
});

test('should handle Body change properly', () => {
   const wrapper = shallow(<PostForm />);
   const value = 'new body';
   wrapper.find('textarea').simulate('change', { target: { value } });
   expect(wrapper.state('body')).toBe(value);
});

test('should handle form submition properly', () => {
   const handleSaveClick = jest.fn();
   const wrapper = shallow(<PostForm post={posts[2]} handleSaveClick={handleSaveClick}/>);
   wrapper.find('form').simulate('submit', { preventDefault: () => { } });
   expect(handleSaveClick).toHaveBeenLastCalledWith(posts[2])
});

test('should handle form submition error properly', () => {
   const handleSaveClick = jest.fn();
   const wrapper = shallow(<PostForm handleSaveClick={handleSaveClick} />);
   wrapper.find('form').simulate('submit', { preventDefault: () => { } });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should handle Remove click properly', () => {
   const handleRemoveClick = jest.fn();
   const wrapper = shallow(<PostForm post={posts[2]} handleRemoveClick={handleRemoveClick} />);
   wrapper.find('a').simulate('click');
   expect(wrapper.state('isOpen')).toBe(true);
});

test('should handle close modal properly', () => {
   const wrapper = shallow(<PostForm />);
   wrapper.setState({ isOpen: true });
   wrapper.find('RemoveApprovalModal').prop('closeModal')();
   expect(wrapper.state('isOpen')).toBe(false);
});