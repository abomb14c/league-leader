
export const cleanEnglishSoccer = (soccerData) => {
  const englishTeams = soccerData.map(team => {
    return {
      name: team.team.name,
      wins: team.win,
      losses: team.loss,
      draws: team.draw,
      points: team.points,
      rank: team.rank
    };
  });
  return englishTeams;
};

export const nbaCleaner = (nbaData) => {
  const conferences = nbaData.conferences.reduce((conferences, conference) => {
    const teams = conference.divisions.reduce((teams, division) => {
      teams = [...teams, ...division.teams];
      return teams;
    }, []);
    conferences[conference.name] = teams;
    return conferences;
  }, {});
  return conferences;
};

export const nbaDraftCleaner = (NBAData) => {
  let teams = [];
  teams.push(...NBAData['EASTERN CONFERENCE'], 
    ...NBAData['WESTERN CONFERENCE']);
  return teams; 
};