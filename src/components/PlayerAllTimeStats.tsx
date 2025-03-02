import { generateAllTimePlayerStats } from "@/generateAllTimePlayerStats";
import { Season } from "@/types";
import Link from "next/link";

interface PlayerAllTimeStatsProps {
  seasons: Season[];
  athletes: string[];
}
export const PlayerAllTimeStats = ({
  seasons,
  athletes,
}: PlayerAllTimeStatsProps) => {
  const playerAllTimeStats = generateAllTimePlayerStats(seasons, athletes);
  return (
    <div className="stats player-alltime-stats">
      <h3>Player All-Time Stats</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th title="Receptions (catches)">REC</th>
            <th title="Touchdowns">TD</th>
            <th title="Interceptions">INT</th>
            <th title="Sacks">SACK</th>
            <th title="Safeties">SFTY</th>
          </tr>
        </thead>
        <tbody>
          {playerAllTimeStats.map(([name, stats]) => {
            const { rec, td, int, sack, safety } = stats;
            return (
              <tr key={name}>
                <th>
                  <Link href={`./player/${name}`}>{name}</Link>
                </th>
                <td>{rec}</td>
                <td>{td}</td>
                <td>{int}</td>
                <td>{sack}</td>
                <td>{safety}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
