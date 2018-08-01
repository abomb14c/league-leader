import React from 'react';
import { shallow } from 'enzyme';
import  ExistingLeagues  from './ExistingLeagues';

describe('ExistingLeagues', () => {
  let wrapper;
  let mockProps; 

  beforeEach(() => {
    mockProps = {
      leagues: [{}, {}, {}]
    };

    wrapper = shallow(<ExistingLeagues
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});