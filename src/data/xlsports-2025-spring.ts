import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "xlsports-2025-spring",
  name: "XL Sports Spring 2025",
  teams: [
    {
      name: "Ravens",
      shortName: "BAL",
      city: "Baltimore",
      brink: "Austin",
      players: [
        "Austin",
        "Tyler",
        "Oliver",
        "Asher",
        "Lane",
        "Jackson",
        "Theodore",
      ],
      colors: colors.ravens,
    },
    {
      name: "Bengals",
      shortName: "CIN",
      city: "Cincinnati",
      brink: "Jason",
      players: [
        "Jason",
        "Liam",
        "Jourdan",
        "Nathan",
        "Levi",
        "Jack",
        "Caleb",
        "Myron",
      ],
      colors: colors.bengals,
    },
  ],
  weeks: [
    {
      date: "Mar 1 2025",
      teams: [
        {
          team: "Ravens",
          time: "12:30",
          opponent: "Steelers",
          home: true,
          score: "21-6",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "2:30",
          opponent: "Chargers",
          home: true,
          score: "8-34",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Mar 8 2025",
      teams: [
        {
          team: "Ravens",
          time: "1:30",
          opponent: "Chargers",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Chiefs",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Mar 15 2025",
      teams: [
        {
          team: "Ravens",
          time: "2:30",
          opponent: "Raiders",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Browns",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Mar 22 2025",
      teams: [
        {
          team: "Ravens",
          time: "11:30",
          opponent: "Chiefs",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Steelers",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Mar 29 2025",
      teams: [
        {
          team: "Ravens",
          time: "1:30",
          opponent: "Broncos",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "2:30",
          opponent: "Raiders",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 5 2025",
      teams: [
        {
          team: "Ravens",
          time: "11:30",
          opponent: "Browns",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "2:30",
          opponent: "Broncos",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 12 2025",
      teams: [
        {
          team: "Ravens",
          time: "12:30",
          opponent: "Bengals",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Ravens",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 26 2025",
      teams: [
        {
          team: "Ravens",
          time: "2:30",
          opponent: "Steelers",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "1:30",
          opponent: "Chargers",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
  images: [],
};
