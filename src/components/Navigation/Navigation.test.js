import React from 'react';
import { shallow } from 'enzyme';
import  { Navigation, mapStateToProps, mapDispatchToProps}  from './Navigation';

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
});