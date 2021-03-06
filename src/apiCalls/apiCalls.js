import {soccerKey, nbaKey} from '../apiKeys';
import { cleanEnglishSoccer, nbaCleaner } from '../cleaner/cleaner';

export const fetchEnglandScores = async () => {
  const url = `https://api.sportradar.us/soccer-t3/eu/en/tournaments/sr:tournament:17/live_standings.json?api_key=${soccerKey}`;
  const response = await fetch(url);
  const dirtySoccerData = await response.json();
  const soccerData = dirtySoccerData.standings[0].groups[0].team_standings;
  
  return cleanEnglishSoccer(soccerData);
};

export const fetchNbaTeams = async () => {

  const url = `http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/standings.json?api_key=${nbaKey}`;
  const response = await fetch(url);
  const nbaData = await response.json();
  return nbaCleaner(nbaData);
};

export const addUserFetch = async (user) => {
  const url = "http://localhost:3000/users/new";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const userData = await response.json();
  return userData;
};

export const fetchUser = async (user) => {
  const url = 'http://localhost:3000/users';
  const userOptions = {
    method:"POST",
    body: JSON.stringify({
      username: user.username,
      password: user.password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, userOptions);
  const userData = await response.json();
  return userData;
};

export const addLeagueFetch = async (leagueInfo) => {
  const keys = {
    leagueName: leagueInfo.name,
    leagueType: leagueInfo.league_type,
    bet: leagueInfo.bet,
    admin: leagueInfo.admin,
    teams: leagueInfo.teams

  };

  const options = {
    method: "POST",
    body: JSON.stringify(leagueInfo),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const url = `http://localhost:3000/league?name=${keys.leagueName}&league_type=${keys.leagueType}&bet=${keys.bet}'&admin=${keys.admin}&teams=${keys.teams}`;
  
  const response = await fetch(url, options);
  const leagueData = await response.json();
  return leagueData;

};

export const fetchLeagues = async (user) => {
  const url = `http://localhost:3000/league/${user.user_id}`;

  const response = await fetch(url);
  const leagues = await response.json();
  return leagues;
};