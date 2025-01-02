import { Season } from "@/types";

const colors = {
  chiefRed: "#E31837",
  chiefGold: "#FFB612",
  raiderBlack: "#000000",
  raiderSilver: "#A5ACAF",
  chargerBlue: "#0073E6",
  chargerGold: "#FFB612",
  brownsOrange: "#FF3C00",
  brownsBrown: "#311D00",
  dolphinAqua: "#008E97",
  dolphinOrange: "#FC4C02",
};

export const seasons: Season[] = [
  {
    id: "Winter-2-2025",
    name: "Winter 2 2025",
    teams: [
      {
        name: "Chiefs",
        shortName: "KC",
        city: "Kansas City",
        color: colors.chiefRed,
        secondaryColor: colors.chiefGold,
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
      },
      {
        name: "Raiders",
        shortName: "LA",
        city: "Los Angeles",
        color: colors.raiderBlack,
        secondaryColor: colors.raiderSilver,
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
  },
  {
    id: "Winter-1-2024",
    name: "Winter 1 2024",
    teams: [
      {
        name: "Chargers",
        shortName: "LA",
        city: "Los Angeles",
        color: colors.chargerBlue,
        secondaryColor: colors.chargerGold,
        brink: "Austin",
        players: [
          "Austin",
          "Jaxon",
          "Cooper",
          "Oliver",
          "Boone",
          "Beckett",
          "Michael",
        ],
      },
      {
        name: "Browns",
        shortName: "CLE",
        city: "Cleveland",
        color: colors.brownsBrown,
        secondaryColor: colors.brownsOrange,
        brink: "Jason",
        players: [
          "Jason",
          "Tyler",
          "Jacob",
          "Ben",
          "Brooks",
          "Aiden",
          "Joel",
          "Vladimir",
          "Andrey",
        ],
      },
    ],
    weeks: [
      {
        date: "Oct 26 2024",
        teams: [
          {
            team: "Chargers",
            time: "3:00",
            opponent: "Broncos",
            home: false,
            score: "19-40",
            stats: {
              Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "12:00",
            opponent: "Dolphins",
            home: true,
            score: "52-32",
            stats: {
              Jason: { rec: 2, td: 1, int: 1, sack: 0, safety: 0 },
            },
          },
        ],
      },
      {
        date: "Nov 2 2024",
        teams: [
          {
            team: "Chargers",
            time: "4:00",
            opponent: "Bengals",
            home: true,
            score: "18-38",
            stats: {
              Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "1:00",
            opponent: "Raiders",
            home: false,
            score: "32-30",
            stats: {
              Jason: { rec: 2, td: 1, int: 0, sack: 0, safety: 0 },
            },
          },
        ],
      },
      {
        date: "Nov 9 2024",
        teams: [
          {
            team: "Chargers",
            time: "3:00",
            opponent: "Steelers",
            home: false,
            score: "19-28",
            stats: {
              Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "2:00",
            opponent: "Broncos",
            home: true,
            score: "4-28",
            stats: {
              Jason: { rec: 2, td: 0, int: 0, sack: 0, safety: 2 },
            },
          },
        ],
      },
      {
        date: "Nov 16 2024",
        teams: [
          {
            team: "Chargers",
            time: "12:00",
            opponent: "Steelers",
            home: true,
            score: "15-46",
            stats: {
              Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "1:00",
            opponent: "Bills",
            home: false,
            score: "41-25",
            stats: {
              Jason: { rec: 2, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
        ],
      },
      {
        date: "Nov 23 2024",
        teams: [
          {
            team: "Chargers",
            time: "5:00",
            opponent: "Ravens",
            home: true,
            score: "28-34",
            stats: {
              Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "12:00",
            opponent: "Steelers",
            home: false,
            score: "31-30",
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
            team: "Chargers",
            time: "3:00",
            opponent: "Browns",
            home: true,
            score: "0-1",
            stats: {
              Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "3:00",
            opponent: "Chargers",
            home: false,
            score: "1-0",
            stats: {
              Jason: { rec: 3, td: 1, int: 0, sack: 0, safety: 0 },
            },
          },
        ],
      },
      {
        date: "Dec 14 2024",
        teams: [
          {
            team: "Chargers",
            time: "4:00",
            opponent: "Bills",
            home: true,
            score: "12-26",
            stats: {
              Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "3:00",
            opponent: "Chiefs",
            home: false,
            score: "52-18",
            stats: {
              Jason: { rec: 2, td: 1, int: 0, sack: 0, safety: 0 },
            },
          },
        ],
      },
      {
        date: "Dec 21 2024",
        teams: [
          {
            team: "Chargers",
            time: "5:00",
            opponent: "Broncos",
            home: true,
            score: "12-35",
            stats: {
              Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0 },
            },
          },
          {
            team: "Browns",
            time: "4:00",
            opponent: "Patriots",
            home: true,
            score: "46-32",
            stats: {
              Jason: { rec: 3, td: 3, int: 0, sack: 0, safety: 0 },
            },
          },
        ],
      },
    ],
  },
  {
    id: "Fall-2024",
    name: "Fall 2024",
    teams: [
      {
        name: "Dolphins",
        shortName: "MIA",
        city: "Miami",
        color: colors.dolphinAqua,
        secondaryColor: colors.dolphinOrange,
        brink: "Jason",
        players: ["Jason", "Murphy", "Banks", "Taz", "Arthur", "Will"],
      },
    ],
    weeks: [],
  },
];

export const links = [
  {
    name: "Chargers",
    url: "https://en.wikipedia.org/wiki/Los_Angeles_Chargers",
  },
  {
    name: "Browns",
    url: "https://en.wikipedia.org/wiki/Cleveland_Browns",
  },
  { name: "Chiefs", url: "https://en.wikipedia.org/wiki/Kansas_City_Chiefs" },
  { name: "Raiders", url: "https://en.wikipedia.org/wiki/Las_Vegas_Raiders" },
];
