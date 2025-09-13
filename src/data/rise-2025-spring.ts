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
          score: "6-26",
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
          score: "0-27",
          notes:
            "Head coach was not present so I got to be asst. coach! I called the offense most of the game. It was so fun, and after a few plays basically gave up on the official plays and drew plays up in the sand.",
          stats: {
            Jason: { rec: 1, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
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
          score: "18-20",
          notes:
            "Dave was at this game and saw one of Jason's best games so far, and had an incredible pick-six where he stepped in front of the reciever and was untouched to the endzone.",
          stats: {
            Jason: { rec: 8, td: 2, int: 1, sack: 0, safety: 0, picksix: 1 },
          },
        },
      ],
    },
    {
      date: "June 6 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Chiefs",
          time: "5:00",
          score: "0-7",
          stats: {
            Jason: { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
    {
      date: "June 13 2025",
      teams: [
        {
          team: "Vikings",
          opponent: "Steelers",
          time: "5:30",
          score: "6-18",
          stats: {
            Jason: { rec: 0, td: 1, int: 1, sack: 0, safety: 0, picksix: 0 },
          },
        },
      ],
    },
  ],
  images: [],
};
