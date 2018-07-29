import userReducer from './userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {

    const expected = {};

    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return user info on action.type of "ADD_USER', () => {
    
    const mockState = {};

    const user = {userId: '3'};

    const mockAction = {
      type:"ADD_USER",
      userId: user.userId
    };

    const expected = {user_id: mockAction.userId};

    const result = userReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return an empty object on action.type "LOGOUT_USER"', () => {

    const mockState = {};

    const mockAction = {
      type: "LOGOUT_USER"
    };

    const expected = {};

    const result = userReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});