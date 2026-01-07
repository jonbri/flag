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
      players: ["Austin", "Jason", "Grayson", "Ben", "Paxton"],
      colors: colors.cowboys,
    },
  ],
  weeks: [
    {
      date: "Jan 17 2026",
      teams: [
        {
          team: "Cowboys",
          opponent: "Jaguars",
          time: "7:10",
          score: "1-1",
          notes: "",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
