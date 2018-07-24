
export const cleanEnglishSoccer = (soccerData) => {
  const englishTeams = soccerData.map(team => {
    return {
      name: team.team.name,
      wins: team.win,
      losses: team.loss,
      draws: team.draw,
      points: team.points,
      rank: team.rank
    }
  });
  return englishTeams;
}