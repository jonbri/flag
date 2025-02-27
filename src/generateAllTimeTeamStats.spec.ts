import { expect, test } from "vitest";
import { generateAllTimeTeamStats } from "./generateAllTimeTeamStats";
import { GameStatsInstance, Season, Team } from "./types";

const austinTeam: Team = {
  name: "Team 1",
  shortName: "T1",
  city: "City 1",
  colors: { primary: "#000000", secondary: "#FFFFFF" },
  brink: "Austin",
  players: ["Austin"],
};

const jasonTeam: Team = {
  name: "Team 2",
  shortName: "T2",
  city: "City 2",
  colors: { primary: "#000000", secondary: "#FFFFFF" },
  brink: "Jason",
  players: ["Jason"],
};

const game = (stats: GameStatsInstance) => ({
  team: "Team",
  opponent: "Team 2",
  home: true,
  time: "1:00",
  stats,
});

test("smoke", () => {
  const seasons: Season[] = [
    {
      id: "1",
      name: "2023",
      teams: [austinTeam],
      weeks: [
        {
          date: "2023-10-01",
          teams: [
            game({
              Austin: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
            }),
          ],
        },
      ],
    },
  ];
  const stats = generateAllTimeTeamStats(seasons);
  const [austinStats, jasonStats] = stats;
  expect(austinStats.name).toEqual("Austin");
  expect(austinStats.stats.w).toEqual(1);
  expect(austinStats.stats.l).toEqual(0);
  expect(austinStats.stats.t).toEqual(0);
});
