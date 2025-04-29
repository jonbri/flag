import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "xlsports-2025-summer",
  name: "XL Sports Summer 2025",
  teams: [
    {
      name: "Broncos",
      shortName: "DEN",
      city: "Denver",
      brink: "Austin",
      players: [
        "Austin",
        "Camden",
        "Owen",
        "Harlis",
        "Beckett",
        "Jerry Shing",
        "Hamza",
        "Ethan",
      ],
      colors: colors.broncos,
    },
    {
      name: "Chiefs",
      shortName: "KC",
      city: "Kansas City",
      brink: "Jason",
      players: [
        "Jason",
        "James",
        "Colton",
        "Nolan",
        "Ford",
        "Hudson",
        "Ian",
        "David",
      ],
      colors: colors.chiefs,
    },
  ],
  weeks: [
    {
      date: "May 3",
      teams: [
        {
          team: "Broncos",
          time: "12:30",
          opponent: "Chiefs",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Broncos",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 10",
      teams: [
        {
          team: "Broncos",
          time: "1:30",
          opponent: "Browns",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Bengals",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 17",
      teams: [
        {
          team: "Broncos",
          time: "2:30",
          opponent: "Steelers",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Chargers",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 31",
      teams: [
        {
          team: "Broncos",
          time: "2:30",
          opponent: "Ravens",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "11:30",
          opponent: "Browns",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 7",
      teams: [
        {
          team: "Broncos",
          time: "1:30",
          opponent: "Bengals",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "2:30",
          opponent: "Steelers",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 14",
      teams: [
        {
          team: "Broncos",
          time: "2:30",
          opponent: "Chargers",
          home: true,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "1:30",
          opponent: "Raiders",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 21",
      teams: [
        {
          team: "Broncos",
          time: "2:30",
          opponent: "Raiders",
          home: false,
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "1:30",
          opponent: "Ravens",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
  images: [],
};
