import { expect, test } from "vitest";
import { generateAllTimeTeamStats } from "./generateAllTimeTeamStats";

test("smoke", () => {
  const stats = generateAllTimeTeamStats();
  expect(stats).toStrictEqual([
    {
      name: "Austin",
      stats: { wins: 500 },
    },
    {
      name: "Jason",
      stats: { wins: 500 },
    },
  ]);
});
