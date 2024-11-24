import { Season } from "./types";

const colors = {
  powderBlue: "#0080C6",
  sunshineGold: "#FFC20E",
  darkBrown: "#311D00",
  orange: "#FF3C00",
  white: "#FFFFFF",
};

export const seasons: Season[] = [
  {
    name: "Fall 2024",
    teams: [
      {
        name: "Chargers",
        shortName: "LA",
        city: "Los Angeles",
        color: colors.powderBlue,
        secondaryColor: colors.sunshineGold,
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
        color: colors.darkBrown,
        secondaryColor: colors.orange,
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
    players: [
      { name: "Austin", rec: 2, td: 0, int: 0, sack: 0, safety: 0 },
      {
        name: "Jason",
        rec: 9,
        td: 3,
        int: 1,
        sack: 0,
        safety: 2,
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
          },
          {
            team: "Browns",
            time: "12:00",
            opponent: "Dolphins",
            home: true,
            score: "52-32",
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
          },
          {
            team: "Browns",
            time: "1:00",
            opponent: "Raiders",
            home: false,
            score: "32-30",
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
          },
          {
            team: "Browns",
            time: "2:00",
            opponent: "Broncos",
            home: true,
            score: "4-28",
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
          },
          {
            team: "Browns",
            time: "1:00",
            opponent: "Bills",
            home: false,
            score: "41-25",
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
          },
          {
            team: "Browns",
            time: "12:00",
            opponent: "Steelers",
            home: false,
            score: "31-30",
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
          },
          {
            team: "Browns",
            time: "3:00",
            opponent: "Chargers",
            home: false,
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
          },
          {
            team: "Browns",
            time: "3:00",
            opponent: "Chiefs",
            home: false,
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
          },
          {
            team: "Browns",
            time: "4:00",
            opponent: "Patriots",
            home: true,
          },
        ],
      },
    ],
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
];
