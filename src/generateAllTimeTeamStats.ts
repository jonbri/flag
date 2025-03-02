import { generateTeamStats } from "./generateTeamStats";
import { Game, Season, TeamStats } from "./types";

export const generateAllTimeTeamStats = (
  seasons: Season[],
): { name: string; stats: TeamStats }[] => {
  const allGames: Game[] = seasons.reduce((games, season) => {
    const seasonGames: Game[] = season.weeks.reduce((g, week) => {
      return g.concat(week.teams);
    }, [] as Game[]);
    return games.concat(seasonGames);
  }, [] as Game[]);

  const getGamesPerAthlete = (name: string) => {
    return allGames.filter((game) => game.stats && game.stats[name]);
  };

  const austinGames = getGamesPerAthlete("Austin");
  const jasonGames = getGamesPerAthlete("Jason");

  const austinStats = generateTeamStats(austinGames.map((game) => game.score));
  const jasonStats = generateTeamStats(jasonGames.map((game) => game.score));

  return [
    { name: "Austin", stats: austinStats },
    { name: "Jason", stats: jasonStats },
  ];
};
