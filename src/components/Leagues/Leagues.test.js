import React from 'react';
import { shallow } from 'enzyme';
import  Leagues  from './Leagues';

describe('DraftPicks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Leagues/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});