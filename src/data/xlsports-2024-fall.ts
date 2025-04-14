import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "xlsports-2024-fall",
  name: "XL Sports Fall 2024",
  notes:
    "Very fun season. Great friends with Murphy who was QB. Murph cried when they finally won a game. Jason mostly WR. Jason's first TD was a catch from Murphy.",
  teams: [
    {
      name: "Dolphins",
      shortName: "MIA",
      city: "Miami",
      brink: "Jason",
      players: ["Jason", "Murphy", "Banks", "Taz", "Arthur", "Will", "Harvey"],
      colors: colors.dolphins,
    },
  ],
  weeks: [
    {
      date: "Aug 24 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Patriots",
          score: "0-1",
          stats: {
            Jason: { rec: 3, td: 1, int: 0, sack: 2, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Sep 7 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Bills",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Sep 14 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Patriots",
          score: "1-0",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Sep 21 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Jets",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Sep 28 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Bills",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 5 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Patriots",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 12 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Jets",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 19 2024",
      teams: [
        {
          team: "Dolphins",
          opponent: "Jets",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
