import React from 'react';
import { shallow } from 'enzyme';
import  NBACard from './NBACard';

describe('Leagues', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {

    mockProps = { 
      name: 'Bulls',
      market: 'Chicago',
      wins: 44,
      losses: 20
    };

    wrapper = shallow(<NBACard
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});