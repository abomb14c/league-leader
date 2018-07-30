import { updateUser, logOutUser } from './updateUser';

describe('action updateUser', () => {
  it('should have a type of ADD_USER', () => {
    
    const user = {userId: 1, username:'dude'};
    const expectedAction = {
      type: 'ADD_USER',
      userId: user.userId,
      username: user.username
    };

    const result = updateUser(user);

    expect(result).toEqual(expectedAction);
  });
});

describe('action logOutUser', () => {
  it('should have a type of LOGOUT_USER', () => {
    
    const expectedAction = {
      type: 'LOGOUT_USER'
    };

    const result = logOutUser();

    expect(result).toEqual(expectedAction);
  });
});