import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rise-2026-winter",
  name: "Rise Winter 2026",
  notes: "",
  teams: [
    {
      name: "Cowboys",
      shortName: "DAL",
      city: "Dallas",
      brink: "Both",
      players: [
        "Austin",
        "Jason",
        "Grayson",
        "Ben",
        "Bennet",
        "Khari",
        "Mia",
        "Maddox",
      ],
      colors: colors.cowboys,
    },
  ],
  weeks: [
    {
      date: "Jan 17 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "Patriots",
          time: "11:00",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jan 24 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "Dolphins",
          time: "11:00",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Jan 31 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "49ers",
          time: "11:00",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Feb 7 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "Lions",
          time: "11:00",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Feb 14 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "Bills",
          time: "11:00",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
