export interface Team {
  name: string;
  shortName: string;
  city: string;
  color: string;
  secondaryColor: string;
  brink: "Austin" | "Jason";
  players: string[];
}

export type GameStats = {
  rec: number;
  td: number;
  int: number;
  sack: number;
  safety: number;
};
export type Game = {
  team: string;
  opponent: string;
  home: boolean;
  score?: string;
  time: string;
  stats?: { [index: string]: GameStats };
};
export type Season = {
  id: string;
  name: string;
  teams: Team[];
  weeks: Week[];
};
export type Week = {
  date: string;
  teams: Game[];
};
