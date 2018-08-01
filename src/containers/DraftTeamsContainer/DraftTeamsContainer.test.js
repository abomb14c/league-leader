import React from 'react';
import { shallow } from 'enzyme';
import {DraftTeamsContainer, mapStateToProps} from './DraftTeamsContainer';

describe('DraftTeamsContainer', () => {
  let wrapper;
  let mockProps; 

  beforeEach(() => {
    mockProps = {
      draftTeams: [{}, {}, {}]
    };

    wrapper = shallow(<DraftTeamsContainer
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


describe('mapStateToProps', () => {
  it('should map draftTeams to props', () => {
    const mockState = {
      EPL: [{}, {}, {}],
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}],
        'WESTERN CONFERENCE': [{}, {}, {}]
      },
      draftTeams: [{}, {}, {}]
    };

    const expected = {
      draftTeams: [{}, {}, {}]

    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});