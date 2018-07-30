import React from 'react';
import { shallow } from 'enzyme';
import  EnglishCard  from './EnglishCard';

describe('EnglishCard', () => {
  let wrapper;
  let mockProps; 

  beforeEach(() => {
    mockProps = {
      name: 'Arsenal',
      wins: 34,
      losses: 0,
      draws: 0,
      points: 100,
      rank: 1
    };

    wrapper = shallow(<EnglishCard
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});