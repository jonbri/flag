import { Season } from "./types";

export const generateAllTimeTeamStats = (seasons: Season[]) => {
  const totalGames = seasons.reduce((acc, season) => {
    return (
      acc +
      season.weeks.reduce((acc, week) => {
        return acc + week.teams.length;
      }, 0)
    );
  }, 0);
  return [
    { name: "Austin", stats: { wins: totalGames } },
    { name: "Jason", stats: { wins: totalGames } },
  ];
};
