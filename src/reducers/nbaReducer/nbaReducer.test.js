import nbaReducer from './nbaReducer';

describe('nbaReducer', () => {
  it('should return the initial state', () => {

    const expected = {'EASTERN CONFERENCE':[], 'WESTERN CONFERENCE':[]};

    const result = nbaReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return NBA data on action.type of "ADD_NBA', () => {
    
    const NBA = {     
      'EASTERN CONFERENCE': [{name:'celtics'}, {name:'raptors'}],
      'WESTERN CONFERENCE': [{name:'lakers'}, {name:'warriors'}]
    };

    const mockState = {};

    const mockAction = {
      type:"ADD_NBA",
      NBA: NBA
    };

    const result = nbaReducer(mockState, mockAction);

    expect(result).toEqual(NBA);
  });
});