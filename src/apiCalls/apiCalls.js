import  soccerKey  from '../apiKeys';
import { cleanEnglishSoccer } from '../cleaner/cleaner';

export const fetchEnglandScores = async () => {
  const url = `https://api.sportradar.us/soccer-t3/eu/en/tournaments/sr:tournament:17/live_standings.json?api_key=${soccerKey}`
  const response = await fetch(url);
  const dirtySoccerData = await response.json();
  const soccerData = dirtySoccerData.standings[0].groups[0].team_standings;

 return cleanEnglishSoccer(soccerData);
}

