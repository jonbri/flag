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
        "Arthur",
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
          score: "50-15",
          home: true,
          notes: "Austin's first ever TD (a catch from Camden)!",
          stats: {
            Austin: { rec: 2, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Broncos",
          score: "15-50",
          home: false,
          stats: {
            Jason: { rec: 6, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
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
          notes: "Austin with a rec td from Owen. Crazy game.",
          score: "24-23",
          stats: {
            Austin: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Bengals",
          notes:
            "XLSports changed the schedule so we were late and Jason only played a few minutes. After the game he was very upset but played outside with James for a while.",
          score: "12-26",
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
          time: "1:30",
          opponent: "Ravens",
          home: false,
          score: "42-22",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "11:30",
          opponent: "Browns",
          home: false,
          score: "32-6",
          stats: {
            Jason: { rec: 2, td: 1, int: 1, sack: 1, safety: 0, picksix: 1 },
          },
        },
      ],
    },
    {
      date: "May 31",
      teams: [
        {
          team: "Broncos",
          time: "12:30",
          opponent: "Chiefs",
          home: true,
          score: "42-15",
          stats: {
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Broncos",
          home: false,
          score: "15-42",
          stats: {
            Jason: { rec: 4, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 7",
      teams: [
        {
          team: "Broncos",
          time: "12:30",
          opponent: "Browns",
          home: false,
          score: "74-0",
          stats: {
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "1:30",
          opponent: "Bengals",
          home: false,
          score: "35-0",
          stats: {
            Jason: { rec: 3, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 14",
      teams: [
        {
          team: "Broncos",
          time: "1:30",
          opponent: "Raiders",
          home: false,
          score: "1-0",
          stats: {
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
        {
          team: "Chiefs",
          time: "12:30",
          opponent: "Ravens",
          home: false,
          score: "31-14",
          stats: {
            Jason: { rec: 4, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jun 21",
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
          time: "12:30",
          opponent: "Raiders",
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
