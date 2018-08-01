import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { CreateUser, mapDispatchToProps}  from './CreateUser';
import { addUserFetch } from '../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('CreateUser', () => {
  let wrapper;
  let mockHandleSignUp;

  beforeEach(() => {
    mockHandleSignUp = jest.fn();

    wrapper = shallow(<CreateUser 
      handleSignup={mockHandleSignUp}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a default state", () => {
    let expected = {
      username: "",
      email: "",
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
        email: "",
        password: ""
      };
  
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    it('should calls addUserFetch with the correct params', () => {
     
      const mockEvent = {
        preventDefault: jest.fn()
      };

      Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      
      expect(addUserFetch).toHaveBeenCalled();  
    });

    it('should call handleSignup with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      const mockUser = {
        userId: 1,
        username: ''
      };

      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleSignUp).toHaveBeenCalledWith(mockUser);
    });
  });


  describe('mapDispatchtoProps', () => {
    it('handleSignup should be called with the correct params', async () => {

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

  
      mappedProps.handleSignup(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});