import { Season, TeamStats } from "./types";

export const generateAllTimeTeamStats = (
  seasons: Season[],
): { name: string; stats: TeamStats }[] => {
  const totalGames = seasons.reduce((acc, season) => {
    return (
      acc +
      season.weeks.reduce((acc, week) => {
        return acc + week.teams.length;
      }, 0)
    );
  }, 0);
  const stats: TeamStats = {
    w: 0,
    l: 0,
    t: totalGames,
    pct: "0.000",
    pf: 0,
    pa: 0,
    ppg: 0,
    papg: 0,
    record: "0-0",
    diff: 0,
    strk: "",
  };
  return [
    { name: "Austin", stats },
    { name: "Jason", stats },
  ];
};
