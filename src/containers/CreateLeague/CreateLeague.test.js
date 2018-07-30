import React from 'react';
import { shallow } from 'enzyme';
import  CreateLeague from './CreateLeague';

describe('DraftCard', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<CreateLeague/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});