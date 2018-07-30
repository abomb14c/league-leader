import React from 'react';
import { shallow } from 'enzyme';
import  {CreateUser}  from './CreateUser';

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
});