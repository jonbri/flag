import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rduflagfootball-2026-summer",
  name: "RDU Flag Football 2026 Summer",
  teams: [
    {
      name: "Green",
      shortName: "GRE",
      city: "Raleigh",
      brink: "Both",
      players: ["Austin", "Jason"],
      colors: colors.green,
    },
  ],
  weeks: [
    {
      date: "July 11 2026",
      teams: [
        {
          team: "Green",
          opponent: "Blue",
          time: "1:00",
          home: true,
          score: "12-56",
          notes:
            "Jason was backup QB and had a nice drive culminating in a short TD pass. Austin played QB for a few snaps and had a completion.",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "July 18 2026",
      teams: [
        {
          team: "Green",
          opponent: "Silver",
          time: "1:00",
          home: true,
          score: "22-48",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "July 25 2026",
      teams: [
        {
          team: "Green",
          opponent: "Blue",
          time: "1:00",
          home: true,
          score: "14-58",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "July 25 2026",
      teams: [
        {
          team: "Green",
          opponent: "Silver",
          time: "1:00",
          home: true,
          score: "39-8",
          stats: {
            Jason: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Aug 1 2026",
      teams: [
        {
          team: "Green",
          opponent: "Blue",
          time: "1:00",
          home: true,
          score: "20-50",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Aug 8 2026",
      teams: [
        {
          team: "Green",
          opponent: "Silver",
          time: "1:00",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Aug 15 2026",
      teams: [
        {
          team: "Green",
          opponent: "Silver",
          time: "1:00",
          home: true,
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
