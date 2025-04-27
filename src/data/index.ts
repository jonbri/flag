import { Season } from "@/types";
import { data as xlsports_2024_fall } from "./xlsports-2024-fall";
import { data as xlsports_2024_winter_1 } from "./xlsports-2024-winter-1";
import { data as xlsports_2025_winter_2 } from "./xlsports-2025-winter-2";
import { data as xlsports_2025_spring } from "./xlsports-2025-spring";
import { data as xlsports_2025_summer } from "./xlsports-2025-summer";
import { data as rise_2025_spring } from "./rise-2025-spring";

export const seasons: Season[] = [
  xlsports_2025_summer,
  rise_2025_spring,
  xlsports_2025_spring,
  xlsports_2025_winter_2,
  xlsports_2024_winter_1,
  xlsports_2024_fall,
];
export * from "./links";
