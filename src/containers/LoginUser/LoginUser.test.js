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


});