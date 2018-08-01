import React from 'react';
import { shallow } from 'enzyme';
import  {Leagues, mapStateToProps}  from './Leagues';

describe('Leagues', () => {
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

describe('mapStateToProps', () => {
  it('should map the user and EPL to props', () => {
    const mockState = {
      user: {user_id:1},
      EPL: [{}, {}, {}],
      draftTeams: [{}, {}, {}]
    };

    const expected = {
      user: {user_id:1}
    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});