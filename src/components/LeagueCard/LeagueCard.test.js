import React from 'react';
import { shallow } from 'enzyme';
import LeagueCard from './LeagueCard';

describe('LeagueCard', () => {
  let wrapper;
  let mockProps; 

  beforeEach(() => {
    mockProps = {
      bet: 'jersey',
      league_type: 'EPL',
      name: 'League'
    };

    wrapper = shallow(<LeagueCard
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});