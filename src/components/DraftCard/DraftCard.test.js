import React from 'react';
import { shallow } from 'enzyme';
import  DraftCard  from './DraftCard';

describe('DraftCard', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      name: 'alan'
    };

    wrapper = shallow(<DraftCard 
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});