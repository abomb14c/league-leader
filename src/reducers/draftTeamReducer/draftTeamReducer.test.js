import draftTeamReducer from './draftTeamReducer';

describe('draftTeamReducer', () => {
  it('should return the initial state', () => {

    const expected = [];

    const result = draftTeamReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return draft teams on action.type of "ADD_TEAMS', () => {
    
    const expected = ['', ''];

    const mockState = [];
    
    const draftTeams =['', ''];

    const mockAction = {
      type:"ADD_TEAMS",
      draftTeams
    };

    const result = draftTeamReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });

  it('should return all time that dont equal the action.team passed in on typ "REMOVE_TEAM"', () => {
    
    const mockState = [{name:'Arsenal'}, {name:'Chelsea'}];
    
    const team={team:'Chelsea'};

    const mockAction = {
      type:"REMOVE_TEAM",
      team
    };

    const expected = [{name:'Arsenal'}];

    const result = draftTeamReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});
