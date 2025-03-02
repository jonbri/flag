import { generateTeamStats } from "./generateTeamStats";
import { Game, Season, TeamStats } from "./types";

export const generateAllTimeTeamStats = (
  seasons: Season[],
  athletes: string[],
): { name: string; stats: TeamStats }[] => {
  const allGames: Game[] = seasons.reduce(
    (games, { weeks }) =>
      games.concat(
        weeks.reduce((games, { teams }) => games.concat(teams), [] as Game[]),
      ),
    [] as Game[],
  );
  return athletes.map((name) => ({
    name,
    stats: generateTeamStats(
      allGames
        .filter((game) => game.stats && game.stats[name])
        .map((game) => game.score),
    ),
  }));
};
