import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "Winter-2-2025",
  name: "Winter 2 2025",
  teams: [
    {
      name: "Chiefs",
      shortName: "KC",
      city: "Kansas City",
      brink: "Austin",
      players: [
        "Austin",
        "Storm",
        "Mason",
        "Colton",
        "Graham",
        "Jack",
        "Jonny",
        "Luke",
        "Daksh",
        "Wells",
      ],
      colors: colors.chiefs,
    },
    {
      name: "Raiders",
      shortName: "LV",
      city: "Los Angeles",
      brink: "Jason",
      players: [
        "Jason",
        "Marco",
        "Owen",
        "Armaan",
        "Beckett",
        "Hunter",
        "Camden",
        "Brooks",
        "Jameson",
        "Mateo",
      ],
      colors: colors.raiders,
    },
  ],
  weeks: [
    {
      date: "Jan 4 2025",
      teams: [
        {
          team: "Chiefs",
          time: "3:30",
          opponent: "Jaguars",
          home: false,
          score: "47-35",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
        {
          team: "Raiders",
          time: "12:30",
          opponent: "Broncos",
          home: false,
          score: "18-27",
          stats: {
            Jason: { rec: 1, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Jan 11 2025",
      teams: [
        {
          team: "Chiefs",
          time: "2:30",
          opponent: "Browns",
          home: true,
          score: "26-27",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
        {
          team: "Raiders",
          time: "3:30",
          opponent: "Bengals",
          home: true,
          score: "20-21",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Jan 18 2025",
      teams: [
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Steelers",
          home: false,
          score: "12-32",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
        {
          team: "Raiders",
          time: "3:30",
          opponent: "Dolphins",
          home: false,
          score: "16-30",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Jan 25 2025",
      teams: [
        {
          team: "Chiefs",
          time: "11:30",
          opponent: "Chargers",
          home: false,
          score: "31-25",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
          },
        },
        {
          team: "Raiders",
          time: "1:30",
          opponent: "Broncos",
          home: true,
          score: "37-23",
          stats: {
            Jason: { rec: 0, td: 2, int: 1, sack: 0, safety: 0 },
          },
        },
      ],
    },
    {
      date: "Feb 1 2025",
      teams: [
        {
          team: "Chiefs",
          time: "1:30",
          opponent: "Ravens",
          home: true,
        },
        {
          team: "Raiders",
          time: "12:30",
          opponent: "Jaguars",
          home: true,
        },
      ],
    },
    {
      date: "Feb 8 2025",
      teams: [
        {
          team: "Chiefs",
          time: "3:30",
          opponent: "Browns",
          home: true,
        },
        {
          team: "Raiders",
          time: "2:30",
          opponent: "Ravens",
          home: true,
        },
      ],
    },
    {
      date: "Feb 15 2025",
      teams: [
        {
          team: "Chiefs",
          time: "2:30",
          opponent: "Bengals",
          home: true,
        },
        {
          team: "Raiders",
          time: "11:30",
          opponent: "Dolphins",
          home: true,
        },
      ],
    },
    {
      date: "Feb 22 2025",
      teams: [
        {
          team: "Chiefs",
          time: "11:30",
          opponent: "Steelers",
          home: true,
        },
        {
          team: "Raiders",
          time: "2:30",
          opponent: "Chargers",
          home: true,
        },
      ],
    },
  ],
};
