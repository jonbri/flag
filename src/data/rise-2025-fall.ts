import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rise-2025-fall",
  name: "Rise Fall 2025",
  notes:
    "At the first practice, the league commissioner informed us that there was no head coach, but called out my name because I had checked the 'asst. coach' box during signup. So, I became the head coach. Two other fathers, Joe (Grayson) and Richard (Arthur) joined as assistant coaches and helped out a lot.",
  teams: [
    {
      name: "Seahawks",
      shortName: "SEA",
      city: "Seattle",
      brink: "Both",
      players: [
        "Austin",
        "Jason",
        "Aahil",
        "Arthur",
        "Avi",
        "Ben",
        "Ethan",
        "Grayson",
        "Maddox",
        "Oliver",
        "Paxton",
      ],
      colors: colors.seahawks,
    },
  ],
  weeks: [
    {
      date: "Sep 19 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Jaguars",
          time: "7:10",
          score: "14-18",
          notes:
            "Close game that went back and forth. On last play of game, I put Jason in as QB and he threw a Hail Mary (his only throw of the game) that was almost caught and would have possibly won us the game.",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Sep 26 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Steelers",
          time: "6:20",
          score: "7-50",
          stats: {
            Jason: { rec: 1, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 3 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Ravens",
          score: "0-25",
          time: "6:20",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 10 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Dolphins",
          score: "18-14",
          time: "6:20",
          notes:
            "First RISE win! Paxton with a Pick-6 and the ceramonial game ball. Ben with clutch TD pass. Grayson ripped an int away from a defender. Jason TD pass",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 17 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Panthers",
          time: "6:20",
          score: "12-28",
          notes:
            "We kept it close. Ben with great TD catch from Jason. Jason with amazing TD run called back for flag-guarding. Avi with great catch.",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Oct 24 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Broncos",
          time: "6:20",
          score: "19-13",
          stats: {
            Jason: { rec: 2, td: 2, int: 1, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Nov 7 2025",
      teams: [
        {
          team: "Seahawks",
          opponent: "Dolphins",
          time: "6:20",
          score: "14-16",
          notes:
            "We were supposed to play against the undefeated Patriots but got moved to this game. It was back and forth with Ben making an amazing long TD catch and Maddox with a bit interception.",
          stats: {
            Jason: { rec: 0, td: 2, int: 0, sack: 0, safety: 0, picksix: 0 },
            Austin: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
  images: [],
};
