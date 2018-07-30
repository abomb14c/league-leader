import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { UserDraftCard, 
  mapDispatchToProps, 
  mapStateToProps}  
  from './UserDraftCard';

describe('UserDraftCard', () => {
  let wrapper;
  let mockHandleTeam;
  let mockProps;
  
  beforeEach(() => {
    mockHandleTeam = jest.fn();
    mockProps = {
      EPL: [{}, {}, {}],
      user: {user_id: 2}
    };
  
    wrapper = shallow(<UserDraftCard 
      handleTeam={mockHandleTeam}
      {...mockProps}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a default state", () => {
    let expected = {
      teams: []
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('handleDrop should set the state of teams', () => {
    
    const teamData = [{}, {}, {}];

    wrapper.instance().handleDrop(teamData);
    wrapper.setState({teams: [{}, {}, {}]});
    expect(wrapper.state()).toEqual({teams: [{}, {}, {}]});
  });
});