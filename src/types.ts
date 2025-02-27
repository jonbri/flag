export interface TeamColors {
  primary: string;
  secondary: string;
}
export interface Team {
  name: string;
  shortName: string;
  city: string;
  colors: TeamColors;
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
export type GameStatsInstance = {
  [index: string]: GameStats;
};
export type Game = {
  team: string;
  opponent?: string;
  home?: boolean;
  score?: string;
  time?: string;
  stats?: GameStatsInstance;
};

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export type Season = {
  id: string;
  name: string;
  teams: Team[];
  weeks: Week[];
  images?: Image[];
};
export type Week = {
  date: string;
  teams: Game[];
};

export interface AllTimeSeasonStats {
  w: number;
  l: number;
  t: number;
}
