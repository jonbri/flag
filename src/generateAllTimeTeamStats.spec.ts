import { expect, test } from "vitest";
import { generateAllTimeTeamStats } from "./generateAllTimeTeamStats";
import { Season } from "./types";

test("smoke", () => {
  const season0: Season = {
    id: "season0",
    name: "Season 0",
    teams: [
      {
        name: "Bills",
        shortName: "BUF",
        city: "Buffalo",
        colors: {
          primary: "blue",
          secondary: "red",
        },
        brink: "Austin",
        players: [],
      },
      {
        name: "Dolphins",
        shortName: "MIA",
        city: "Miami",
        colors: {
          primary: "aqua",
          secondary: "orange",
        },
        brink: "Jason",
        players: [],
      },
    ],
    weeks: [
      {
        date: "2021-09-09",
        teams: [
          {
            team: "Bills",
            score: "10-0",
          },
          {
            team: "Dolphins",
            score: "0-10",
          },
        ],
      },
    ],
  };

  const seasons: Season[] = [season0];
  const stats = generateAllTimeTeamStats(seasons);
  expect(stats[0]).toStrictEqual({
    name: "Austin",
    stats: {
      w: 0,
      l: 0,
      t: 2,
      pct: "0.000",
      pf: 0,
      pa: 0,
      ppg: 0,
      papg: 0,
      record: "0-0",
      diff: 0,
      strk: "",
    },
  });
});
