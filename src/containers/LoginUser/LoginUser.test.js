import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { LoginUser, mapDispatchToProps}  from './LoginUser';
import { fetchUser } from '../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('LoginUser', () => {
  let wrapper;
  let mockHandleLogin;

  beforeEach(() => {
    mockHandleLogin = jest.fn();

    wrapper = shallow(<LoginUser 
      handleLogin={mockHandleLogin}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a default state", () => {
    let expected = {
      username: "",
      password: ""
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('handleChange', () => {
    it("should update state on change", () => {
      let mockEvent = {
        target: { name: "username", value: "alan" }
      };
      let expected = {
        username: "alan",
        password: ""
      };
  
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expected);
    });
  });


  describe('handleSubmit', () => {
    it('should calls fetchUser with the correct params', () => {
     
      const mockEvent = {
        preventDefault: jest.fn()
      };

      Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      
      expect(fetchUser).toHaveBeenCalled();  
    });

    it('should call handleSignup with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      const response = {
        id: 2,
        username: 'alan'
      };

      await wrapper.instance().handleSubmit(mockEvent);
      await fetchUser(response);
      expect(mockHandleLogin).toHaveBeenCalled();
    });
  });


  describe('mapDispatchtoProps', () => {
    it('handleLogin should be called with the correct params', async () => {

      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);

      const mockUser = {
        userId: 1,
        username: 'Alan'
      };

      const mockAction = {
        type: "ADD_USER", 
        userId: mockUser.userId,
        username: mockUser.username
      };

  
      mappedProps.handleLogin(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});