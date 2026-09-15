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
          opponent: "TBD",
          time: "7:10",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
};
