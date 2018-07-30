import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { LoginUser, mapDispatchToProps}  from './LoginUser';
import { fetchUser } from '../../apiCalls/apiCalls';

// jest.mock('./../../apiCalls/apiCalls');

describe('DraftCard', () => {
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

});