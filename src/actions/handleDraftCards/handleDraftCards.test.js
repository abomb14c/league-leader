import {addDraftCards, removeTeam} from './handleDraftCards';

describe('action addDraftCards', () => {
  it('should have a type of ADD_TEAMS', () => {
    
    const draftTeams = [{}, {}, {}];
    const expectedAction = {
      type: 'ADD_TEAMS',
      draftTeams
    };

    const result = addDraftCards(draftTeams);

    expect(result).toEqual(expectedAction);
  });
});

describe('removeTeam', () => {
  it('should have a type of RemoveTeam', () => {
    
    const team = 'team';
    const expectedAction = {
      type: 'REMOVE_TEAM',
      team
    };

    const result = removeTeam(team);

    expect(result).toEqual(expectedAction);
  });
});