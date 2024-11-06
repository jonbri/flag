export interface Team {
  name: "Chargers" | "Browns";
  city: string;
  colors: string[];
  players: string[];
}

// export type Week = {
//   [indexof in "Chargers" | "Browns"]: {
//     opponent: string;
//     home: boolean;
//     score?: string;
//     time?: string;
//   };
// } & {
//   date: string;
// };

export type TeamResult = {
  opponent: string;
  home: boolean;
  score?: string;
  time: string;
};
export type Week = {
  date: string;
  Chargers: TeamResult;
  Browns: TeamResult;
};

export interface Stats {
  catches: number;
  touchdowns: number;
  interceptions: number;
}
export interface Player extends Stats {
  name: string;
}
