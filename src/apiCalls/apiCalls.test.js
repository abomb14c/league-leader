import * as api from './apiCalls';
import {soccerKey, nbaKey} from '../apiKeys';
import { cleanEPLData, mockDirtySoccer } from '../mockData/mockEPLData';
import { mockNBAData, mockCleanNBAData } from '../mockData/mockNBAData';

describe("apiCalls", () => {
  describe("fetchEnglandScores", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockDirtySoccer)
        })
      );
    });

    it("Should be called with the right params", async () => {
      const url = `https://api.sportradar.us/soccer-t3/eu/en/tournaments/sr:tournament:17/live_standings.json?api_key=${soccerKey}`;

      await api.fetchEnglandScores();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("Should return an array of soccer teams", async () => {
      await expect(api.fetchEnglandScores()).resolves.toEqual(cleanEPLData);
    });
  });

  describe("fetchNBATeams", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockNBAData)
        })
      );
    });

    it("Should be called with the right params", async () => {
      const url = `http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/standings.json?api_key=${nbaKey}`;

      await api.fetchNbaTeams();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("Should return an object of NBA Teams", async () => {
      await expect(api.fetchNbaTeams()).resolves.toEqual(mockCleanNBAData);
    });
  });

  describe("postNewUser", () => {
    let mockUsers;
    let mockUser;


    beforeEach(() => {
      mockUser = {
        username: "Alan",
        email: "alan@doc.com",
        password: "DocisGr8"
      };

      mockUsers = [{
        username: "Nicole",
        email: "nicole@nicole.com",
        password: "nicole2"
      },
      {
        username: "Quin",
        email: "quin@quin.com",
        password: "quin1"
      }
      ];

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () =>
            Promise.resolve({
              users: mockUsers
            })
        })
      );
    });

    it("calls fetch with the correct data when adding a new user", async () => {
      const expected = [
        "http://localhost:3000/users/new",
        {
          body: JSON.stringify(mockUser),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      ];

      await api.addUserFetch(mockUser);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('Should return an object of user details', async () => {
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUsers[0])
        })
      );

      const expected = {
        "username": "Nicole",
        "password": "nicole2",
        "email": "nicole@nicole.com"
      };
      const actual = await api.fetchUser(mockUser);

      expect(actual).toEqual(expected);
    }); 
  });

  describe('fetchUser', () => {
    let mockUsers;
    let mockUser;

    beforeEach(() => {
      mockUser = {
        "password": "password",
        "username": "alan"
      };

      mockUsers = [{
        "id": 1,
        "username": "alan",
        "password": "password",
        "email": "tman2272@aol.com"
      }, 
      {
        "id": 2,
        "name": "Dude",
        "password": "password",
        "email": "dude6969@aol.com"
      }];


      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUsers[0])
        })
      );
    });
    
    it('Should be called with the correct params', async () => {
      const url = 'http://localhost:3000/users';
      const expected = [url, {
        method: 'POST',
        body: JSON.stringify({
          username: mockUser.username,
          password: mockUser.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }];
      await api.fetchUser(mockUser);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
   
    it('Should return an object of user details', async () => {
      const expected = {
        "id": 1,
        "username": "alan",
        "password": "password",
        "email": "tman2272@aol.com"
      };
      const actual = await api.fetchUser(mockUser);

      expect(actual).toEqual(expected);
    }); 
  });
});
  
describe("addLEagueFetch", () => {
  let mockKeys;
  let leagueInfo;


  beforeEach(() => {
    mockKeys = {
      leagueName: 'league', 
      leagueType: 'EPL',
      bet: 'jersey',
      admin: 2,
      teams: [{}, {}, {}]
    };

    leagueInfo = {
      name: 'league',
      league_type:'EPL',
      bet: 'jersey',
      admin: 2,
      teams: [{}, {}, {}]
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            leagueInfo: leagueInfo
          })
      })
    );
  });

  it("calls fetch with the correct data when adding a new league", async () => {
    const expected = [
      `http://localhost:3000/league?name=${mockKeys.leagueName}&league_type=${mockKeys.leagueType}&bet=${mockKeys.bet}'&admin=${mockKeys.admin}&teams=${mockKeys.teams}`,
      {
        body: JSON.stringify(leagueInfo),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    ];

    await api.addLeagueFetch(leagueInfo);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('Should return an object of leagueinfo', async () => {
    
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(leagueInfo)
      })
    );

    const expected = {
      admin: 2, 
      bet: "jersey", 
      league_type: "EPL", 
      name: "league", 
      teams: [{}, {}, {}]
    };
    const actual = await api.addLeagueFetch(leagueInfo);

    expect(actual).toEqual(expected);
  }); 

  describe('fetchLeagues', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {
        "password": "password",
        "username": "alan",
        "user_id": 1
      };

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUser)
        })
      );
    });
    
    it('Should be called with the correct params', async () => {
      const url = `http://localhost:3000/league/${mockUser.user_id}`;

      await api.fetchLeagues(mockUser);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });
   
    it('Should return an object of user details', async () => {
      const expected = {
        "user_id": 1,
        "username": "alan",
        "password": "password"
      };
      const actual = await api.fetchLeagues(mockUser);

      expect(actual).toEqual(expected);
    }); 
  });
});

