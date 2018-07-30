import { cleanEPLData } from '../../mockData/mockEPLData';
import { mockCleanNBAData } from '../../mockData/mockNBAData';


export const fetchEnglandScores = jest.fn().mockImplementation(() => 
  Promise.resolve(cleanEPLData));


export const fetchNbaTeams = jest.fn().mockImplementation(() => 
  Promise.resolve(mockCleanNBAData));

export const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
  "userId": 1
}));

export const fetchUser = jest.fn().mockImplementation(() => Promise.resolve({
  data: {
    id: 2,
    name: 'alan',
    password: 'password',
    email: 'alanjcharles14@gmail.com'
  }
}));