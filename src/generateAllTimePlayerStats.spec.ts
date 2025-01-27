import { expect, test } from "vitest";
import { generateAllTimePlayerStats } from "./generateAllTimePlayerStats";
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
  const stats = generateAllTimePlayerStats(seasons);
  expect(stats).toStrictEqual([
    ["Austin", { rec: 1, td: 1, int: 0, sack: 0, safety: 0 }],
  ]);
});

test("multiple seasons", () => {
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
              Jason: { rec: 3, td: 0, int: 0, sack: 0, safety: 1 },
            }),
          ],
        },
      ],
    },
    {
      id: "2",
      name: "2024",
      teams: [jasonTeam],
      weeks: [
        {
          date: "2024-10-01",
          teams: [
            game({
              Austin: { rec: 0, td: 0, int: 5, sack: 0, safety: 0 },
            }),
          ],
        },
        {
          date: "2024-10-01",
          teams: [
            game({
              Jason: { rec: 2, td: 2, int: 0, sack: 0, safety: 0 },
            }),
          ],
        },
      ],
    },
  ];
  const stats = generateAllTimePlayerStats(seasons);
  expect(stats).toStrictEqual([
    ["Austin", { rec: 1, td: 1, int: 5, sack: 0, safety: 0 }],
    ["Jason", { rec: 5, td: 2, int: 0, sack: 0, safety: 1 }],
  ]);
});
