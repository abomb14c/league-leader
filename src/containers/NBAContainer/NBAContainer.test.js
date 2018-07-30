import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { NBAContainer, mapStateToProps}  from './NBAContainer';

describe('NBAContainer', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}],
        'WESTERN CONFERENCE': [{}, {}, {}]
      }
    };

    wrapper = shallow(<NBAContainer
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should map the NBA to props', () => {
    const mockState = {
      league: {},
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}],
        'WESTERN CONFERENCE': [{}, {}, {}]
      },
      draftTeams: [{}, {}, {}]
    };

    const expected = {
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}],
        'WESTERN CONFERENCE': [{}, {}, {}]
      }
    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
