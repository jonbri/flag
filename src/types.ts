export interface Team {
  name: "Chargers" | "Browns";
  city: string;
  colors: string[];
  players: string[];
}

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
  rec: number;
  td: number;
  int: number;
  sack: number;
}
export interface Player extends Stats {
  name: string;
}
