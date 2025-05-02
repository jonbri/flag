import { colors } from "@/constants";
import { Season } from "@/types";

export const data: Season = {
  id: "rise-2025-spring",
  name: "Rise Spring 2025",
  teams: [
    {
      name: "Vikings",
      shortName: "MIN",
      city: "Minnesota",
      brink: "Jason",
      players: [
        "Jason",
        "Alexander A.",
        "Bennett",
        "Franco",
        "Grayson",
        "James",
        "Liam",
        "Marley",
        "Miles",
        "Thomas",
      ],
      colors: colors.vikings,
    },
  ],
  weeks: [
    {
      date: "Mar 28 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Giants",
          time: "5:30",
          score: "0-14",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 18 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Saints",
          time: "5:30",
          score: "18-18",
          stats: {
            Jason: { rec: 2, td: 3, int: 1, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "Apr 25 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Bengals",
          time: "5:30",
          score: "6-27",
          notes: "Long rushing TD",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 2 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Chiefs",
          time: "5:30",
          score: "6-18",
          stats: {
            Jason: { rec: 0, td: 1, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 9 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Bears",
          time: "5:30",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 16 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Seahawks",
          time: "5:30",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "May 30 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Panthers",
          time: "5:30",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
  images: [],
};
