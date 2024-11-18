export interface Team {
  name: string;
  shortName: string;
  city: string;
  color: string;
  secondaryColor: string;
  brink: "Austin" | "Jason";
  players: string[];
}

export type TeamResult = {
  team: string;
  opponent: string;
  home: boolean;
  score?: string;
  time: string;
};
export type Season = {
  name: string;
  teams: Team[];
  players: Player[];
  weeks: Week[];
};
export type Week = {
  date: string;
  teams: TeamResult[];
};

export interface Stats {
  rec: number;
  td: number;
  int: number;
  sack: number;
  safety: number;
}
export interface Player extends Stats {
  name: string;
}
