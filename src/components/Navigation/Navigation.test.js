import React from 'react';
import { shallow } from 'enzyme';
import  { Navigation, mapStateToProps, mapDispatchToProps}  from './Navigation';
import { logOutUser } from '../../actions/updateUser/updateUser';

describe('Navigation', () => {
  let wrapper;
  let mockProps;
  let mockHandleLogout; 

  beforeEach(() => {
    mockHandleLogout = jest.fn();
    mockProps = {
      user: {user_id: 4}
    };

    wrapper = shallow(<Navigation
      {...mockProps}
      handleLogout= {mockHandleLogout}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a user object with an id', () => {
  
      const mockState = {
        user: {user_id: 3},
        text: ''
      };
  
      const expected = {
        user: {user_id: 3}
      };
  
    
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addHouses action when handleHouses is called', () => {
      
      const mockDispatch = jest.fn();
  
      const actionToDispatch = logOutUser();
  
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.handleLogout();
     
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});