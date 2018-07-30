import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { SetupLeague, mapDispatchToProps}  from './SetupLeague';

describe('LoginUser', () => {
  let wrapper;
  let mockCreateNewLeague;
  let mockHandleDraftTeams;
  let mockProps;

  beforeEach(() => {
    mockCreateNewLeague = jest.fn();
    mockHandleDraftTeams = jest.fn();
    mockProps = {
      EPL: [{}, {}, {}],
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}], 
        'WESTERN CONFERENCE': [{}, {}, {}]}
    };

    wrapper = shallow(<SetupLeague 
      handleDraftTeams={mockHandleDraftTeams}
      createNewLeague={mockCreateNewLeague}
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("has a default state", () => {
    let expected = {
      showMenu: false,
      leagueName: '',
      leagueBet: '',
      league: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });
});