import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  {CreateUser}  from './CreateUser';
import { addUserFetch } from '../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('DraftCard', () => {
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
    it('should calls addUserFetch callback after adding user', async () => {
     
      let mockEvent = {
        preventDefault: jest.fn()
      };

      await  Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      
      expect(addUserFetch).toHaveBeenCalled();  
    });
  
    it('should call handleSignup with the correct params', async () => {
      const mockUser = {
        "id": 1,
        "name": ""
      };
  
      await wrapper.instance().handleSubmit();
  
      expect(mockHandleSignUp).toHaveBeenCalledWith(mockUser);
    });
  });
});