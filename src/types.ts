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
  time?: string;
};
export type Week = {
  date: string;
  Chargers: TeamResult;
  Browns: TeamResult;
};

export interface Player {
  name: string;
  catches: number;
  touchdowns: number;
  interceptions: number;
}
