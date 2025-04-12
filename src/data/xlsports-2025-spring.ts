import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "xlsports-2025-spring",
  name: "XL Sports Spring 2025",
  notes:
    "Jason's first season a true QB1. Jason's team with a lot of beginners. Austin got way better as a reciever.",
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
          score: "20-41",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Chiefs",
          home: false,
          score: "40-43",
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
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
          score: "18-43",
          stats: {
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Browns",
          home: true,
          score: "6-52",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
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
          score: "42-35",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Steelers",
          home: false,
          score: "7-42",
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
          score: "12-46",
          stats: {
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "2:30",
          opponent: "Raiders",
          home: false,
          score: "13-44",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 1, safety: 0, picksix: 0 },
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
          score: "13-39",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "2:30",
          opponent: "Broncos",
          home: false,
          score: "18-8",
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 2, safety: 0, picksix: 0 },
          },
          notes:
            "Perhaps Jason's best overall game so far. He was the entire offense. Huge full-field qb scramble for td.",
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
          score: "26-13",
          home: false,
          stats: {
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Bengals",
          time: "12:30",
          opponent: "Ravens",
          score: "13-26",
          home: true,
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
          notes:
            "Jason qb whole game, just like all season. Myron missed an easy td catch. Austin with the extra point conversion.",
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
