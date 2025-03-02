import { GameStats, Season } from "./types";

export const generateAllTimePlayerStats = (
  seasons: Season[],
  athletes: string[],
) => {
  return Object.entries(
    seasons.reduce(
      (acc, { weeks }) => {
        weeks.forEach(({ teams }) => {
          teams.forEach(({ stats }) => {
            if (!stats) return;
            if (!athletes.includes(Object.keys(stats)[0])) return;
            for (const [name, stat] of Object.entries(stats)) {
              if (!acc[name]) {
                acc[name] = { rec: 0, td: 0, int: 0, sack: 0, safety: 0 };
              }
              acc[name].rec += stat.rec;
              acc[name].td += stat.td;
              acc[name].int += stat.int;
              acc[name].sack += stat.sack;
              acc[name].safety += stat.safety;
            }
          });
        });
        return acc;
      },
      {} as { [index: string]: GameStats },
    ),
  );
};
