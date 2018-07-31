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

  it('handleDrop should call handleTeam', () => {

    const teamData = [{}, {}, {}];

    wrapper.instance().handleDrop(teamData);
    expect(mockHandleTeam).toHaveBeenCalledWith(teamData);
  });

  it('handleDragover should have the correct drop effect', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      dataTransfer: { dropEffect: "move" }
    };

    wrapper.instance().handleDragover(mockEvent);

    expect(mockEvent.dataTransfer.dropEffect).toEqual('move');
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

describe('mapDispatchtoProps', () => {
  it('handleTeam should be called with the correct params', async () => {

    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    const team = {};

    const mockAction = {
      type: "REMOVE_TEAM", 
      team
    };


    mappedProps.handleTeam(team);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});