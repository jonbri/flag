import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "xlsports-2024-fall",
  name: "XL Sports Fall 2024",
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
      date: "Oct 19 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 3, td: 1, int: 0, sack: 1, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 26 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Nov 2 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Nov 9 2024",
      teams: [
        {
          team: "Dolphins",
          score: "1-0",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Nov 16 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Nov 30 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Dec 7 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Dec 14 2024",
      teams: [
        {
          team: "Dolphins",
          score: "0-1",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
  ],
};
