import { addTeam } from './handleDraftPicks';

describe('action addTeam', () => {
  it('should have a type of ADD_TEAMS', () => {
    
    const team = {};
    const expectedAction = {
      type: 'ADD_TEAM',
      team
    };

    const result = addTeam(team);

    expect(result).toEqual(expectedAction);
  });
});

// describe('removeTeam', () => {
//   it('should have a type of RemoveTeam', () => {
    
//     const team = 'team';
//     const expectedAction = {
//       type: 'REMOVE_TEAM',
//       team
//     };

//     const result = removeTeam(team);

//     expect(result).toEqual(expectedAction);
//   });
// });