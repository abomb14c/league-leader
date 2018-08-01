import draftPickReducer from './draftPickReducer';

describe('draftPickReducer', () => {
  it('should return the initial state', () => {

    const expected = [];

    const result = draftPickReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return draft pick on action.type of "ADD_TEAM', () => {
    
    const expected = [{}];

    const mockState = [];
    
    const team = {};

    const mockAction = {
      type:"ADD_TEAM",
      team
    };

    const result = draftPickReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});
