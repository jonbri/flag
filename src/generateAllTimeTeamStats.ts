import { generateTeamStats } from "./generateTeamStats";
import { AllTimeSeasonStats, Season } from "./types";

export const generateAllTimeTeamStats = (seasons: Season[]) => {
  console.log(seasons);
  // const returnValue = seasons.reduce(
  //   (acc, { weeks }) => {
  //     weeks.forEach(({ teams: game }) => {
  //       game.forEach(({ stats }) => {
  //         if (!stats) return;
  //         for (const [name, stat] of Object.entries(stats)) {
  //           const scores = Object.values(stat).map((score) => score.toString());
  //           const seasonStats = generateTeamStats(scores);
  //           const team = acc.find((team) => team.name === name);
  //           if (!team) {
  //             acc.push({ name, stats: seasonStats });
  //           } else {
  //             team.stats.w += seasonStats.w;
  //           }
  //         }
  //       });
  //     });
  //     return acc;
  //   },
  //   [] as { name: string; stats: AllTimeSeasonStats }[],
  // );
  // console.log(returnValue);
  // return returnValue;

  const seasonStats = seasons.map(({ weeks }) => {
    return weeks.reduce( (acc, { teams }) => {
      // console.log(scores)
      return acc;
    }, [] as { name: string; stats: AllTimeSeasonStats }[]);
  });
  
  // console.log(seasonStats)

  return [];
};
