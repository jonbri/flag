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
      shortName: "LA",
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
        },
        {
          team: "Raiders",
          time: "12:30",
          opponent: "Broncos",
          home: false,
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
        },
        {
          team: "Bengals",
          time: "3:30",
          opponent: "Bengals",
          home: true,
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
        },
        {
          team: "Raiders",
          time: "3:30",
          opponent: "Dolphins",
          home: false,
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
        },
        {
          team: "Raiders",
          time: "1:30",
          opponent: "Broncos",
          home: true,
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
