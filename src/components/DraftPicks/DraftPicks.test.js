import React from 'react';
import { shallow } from 'enzyme';
import  DraftPicks  from './DraftPicks';

describe('DraftPicks', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      teams: [{}, {}, {}]
    };

    wrapper = shallow(<DraftPicks
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

// add test to render correct amount of teams