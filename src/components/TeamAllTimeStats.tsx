import { generateAllTimeTeamStats } from "@/generateAllTimeTeamStats";
import { Season } from "@/types";
import Link from "next/link";

interface PlayerAllTimeStatsProps {
  seasons: Season[];
}
export const TeamAllTimeStats = ({ seasons }: PlayerAllTimeStatsProps) => {
  const teamAllTimeStats = generateAllTimeTeamStats(seasons);
  return (
    <div className="stats player-alltime-stats">
      <h3>Team All-Time Stats</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th title="Wins">W</th>
            <th title="Losses">L</th>
            <th title="Ties">T</th>
            <th title="Winning Percentage">PCT</th>
            <th title="Current Streak">STRK</th>
          </tr>
        </thead>
        <tbody>
          {teamAllTimeStats.map(({ name, stats }) => {
            const { wins } = stats;
            return (
              <tr key={name}>
                <th>
                  <Link href={`./player/${name}`}>{name}</Link>
                </th>
                <td>{wins}</td>
                <td>-1</td>
                <td>-1</td>
                <td>-1</td>
                <td>-1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
