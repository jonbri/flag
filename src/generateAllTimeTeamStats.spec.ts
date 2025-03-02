import { expect, test } from "vitest";
import { generateAllTimeTeamStats } from "./generateAllTimeTeamStats";
import { Season } from "./types";

test("smoke", () => {
  const seasons: Season[] = [
    {
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
              score: "10-2",
              stats: {
                Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
              },
            },
            {
              team: "Dolphins",
              score: "0-10",
              stats: {
                Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
              },
            },
          ],
        },
        {
          date: "2021-09-20",
          teams: [
            {
              team: "Bills",
              score: "2-3",
              stats: {
                Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
              },
            },
          ],
        },
        {
          date: "2021-09-29",
          teams: [
            {
              team: "Bills",
              score: "0-0",
              stats: {
                Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
              },
            },
          ],
        },
      ],
    },
  ];
  const [austinStats] = generateAllTimeTeamStats(seasons, ["Austin", "Jason"]);
  expect(austinStats).toStrictEqual({
    name: "Austin",
    stats: {
      w: 1,
      l: 1,
      t: 1,
      pct: ".333",
      pf: 12,
      pa: 5,
      ppg: 4,
      papg: 1.7,
      record: "1-1-1",
      diff: 7,
      strk: "T1",
    },
  });
});
