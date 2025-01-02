import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "Winter-1-2024",
  name: "Winter 1 2024",
  teams: [
    {
      name: "Chargers",
      shortName: "LA",
      city: "Los Angeles",
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
      colors: colors.chargers,
    },
    {
      name: "Browns",
      shortName: "CLE",
      city: "Cleveland",
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
      colors: colors.browns,
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
  images: [
    {
      src: "../chargers2024.jpg",
      alt: "Chargers 2024",
    },
    {
      src: "../browns2024.jpg",
      alt: "Browns 2024",
    },
  ],
};
