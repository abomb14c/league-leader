import { cleanEPLData } from '../../mockData/mockEPLData';
import { mockCleanNBAData } from '../../mockData/mockNBAData';


export const fetchEnglandScores = jest.fn().mockImplementation(() => 
  Promise.resolve(cleanEPLData));


export const fetchNbaTeams = jest.fn().mockImplementation(() => 
  Promise.resolve(mockCleanNBAData));

