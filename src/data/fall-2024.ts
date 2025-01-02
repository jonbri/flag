import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "Fall-2024",
  name: "Fall 2024",
  teams: [
    {
      name: "Dolphins",
      shortName: "MIA",
      city: "Miami",
      brink: "Jason",
      players: ["Jason", "Murphy", "Banks", "Taz", "Arthur", "Will"],
      colors: colors.dolphins,
    },
  ],
  weeks: [],
};
