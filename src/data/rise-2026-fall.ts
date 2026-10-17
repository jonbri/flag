import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rise-2026-fall",
  name: "Rise Fall 2026",
  notes:
    "Back with Joe as assistant coach. There are 4 total coaches, three named 'Jon'. There was a 'minicamp' with just a few kids at first, and then a team practice. At the first team practice Jason took a hard shot to the nose and was bleeding profusely. He got back on the field and promptly scored a TD during the flag-pull drill.",
  teams: [
    {
      name: "Vikings",
      shortName: "MIN",
      city: "Minnesota",
      brink: "Jason",
      players: [
        "Jason",
        "Brooks",
        "Darian",
        "Dean",
        "Declan",
        "Grayson",
        "Jake",
        "Joel",
        "Kaden",
        "Khari",
        "Nolan",
        "Oaks",
      ],
      colors: colors.vikings,
    },
  ],
  weeks: [
    {
      date: "Sep 18 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Cowboys",
          time: "5:30",
          score: "28-6",
          home: false,
          notes: "Jason leaping pick-6 with long Barry Sanders-like return.",
          stats: {
            Jason: { rec: 0, td: 2, int: 3, sack: 0, safety: 0, picksix: 1 },
          },
        },
      ],
    },
    {
      date: "Sep 25 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Falcons",
          time: "6:20",
          home: false,
          score: "6-21",
          stats: {
            Jason: { rec: 0, td: 1, int: 1, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 2 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Steelers",
          time: "5:30",
          home: true,
          score: "31-0",
          notes: "Jason sweet pick-6 where he stepped in front of a pass",
          stats: {
            Jason: { rec: 1, td: 4, int: 1, sack: 0, safety: 0, picksix: 1 },
          },
        },
      ],
    },
    {
      date: "Oct 9 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Ravens",
          time: "6:20",
          home: false,
          score: "28-12",
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 16 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Buccaneers",
          time: "6:20",
          home: false,
          score: "19-24",
          notes: "Incredible game, so many highlights. Jason threw a laser to Jake for a TD and a deep bomb to Kaden for TD. At the end of the game, down by a TD, Jason threw a perfect long ball piss-missle which was dropped, but was probably his best throw he has had so far.",
          stats: {
            Jason: { rec: 0, td: 3, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 23 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Panthers",
          time: "6:20",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 30 2026",
      teams: [
        {
          team: "Vikings",
          opponent: "Bills",
          time: "6:20",
          home: false,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
