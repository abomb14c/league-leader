import React from 'react';
import { shallow } from 'enzyme';
import  Leagues  from './Leagues';

describe.skip('Leagues', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      user: {}
    };
    wrapper = shallow(<Leagues {...mockProps}/>, { disableLifecycleMethods: true });
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});