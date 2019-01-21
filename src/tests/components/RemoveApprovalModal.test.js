import React from 'react';
import { shallow } from 'enzyme';
import RemoveApprovalModal from './../../components/RemoveApprovalModal';

let handleRemoveClick, closeModal, wrapper;

beforeEach(() => {
   closeModal = jest.fn();
   handleRemoveClick = jest.fn();
   wrapper = shallow(<RemoveApprovalModal 
      closeModal={closeModal}
      handleRemoveClick={handleRemoveClick}
   />);
});

test('should render RemoveApprovalModal properly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle remove button properly', () => {
   wrapper.find('button').at(0).simulate('click');
   expect(handleRemoveClick).toHaveBeenCalled();
   expect(closeModal).toHaveBeenCalled();
});

test('should handle no button click properly', () => {
   wrapper.find('button').at(1).simulate('click');
   expect(closeModal).toHaveBeenCalled();
});