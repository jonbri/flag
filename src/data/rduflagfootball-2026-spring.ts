import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rduflagfootball-2026-spring",
  name: "RDU Flag Football 2026 Spring",
  notes: "Inaugural season of RDU Flag Football",
  teams: [
    {
      name: "Cobras",
      shortName: "COB",
      city: "Raleigh",
      brink: "Both",
      players: ["Austin", "Jason", "Jake"],
      colors: colors.cobras,
    },
  ],
  weeks: [
    {
      date: "Mar 21 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "47-14",
          notes: "Ben (Jake's brother) played filled in for the Pythons",
          stats: {
            Jason: { rec: 3, td: 3, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 2, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Mar 28 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "40-8",
          stats: {
            Jason: { rec: 6, td: 6, int: 1, sack: 1, safety: 1, picksix: 1 },
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 11 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "62-22",
          stats: {
            Jason: { rec: 2, td: 4, int: 1, sack: 1, safety: 0, picksix: 1 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 16 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "32-30",
          notes: "They randomized the teams",
          stats: {
            Jason: { rec: 1, td: 4, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 25 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "31-20",
          notes: "Austin td throw",
          stats: {
            Jason: { rec: 5, td: 4, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 2 2026",
      teams: [
        {
          team: "Cobras",
          opponent: "Pythons",
          time: "2:00",
          home: true,
          score: "32-26",
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 4, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
