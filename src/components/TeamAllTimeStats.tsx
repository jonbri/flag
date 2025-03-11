import { generateAllTimeTeamStats } from "@/generateAllTimeTeamStats";
import { Season } from "@/types";
import Link from "next/link";

interface PlayerAllTimeStatsProps {
  seasons: Season[];
  athletes: string[];
}
export const TeamAllTimeStats = ({
  seasons,
  athletes,
}: PlayerAllTimeStatsProps) => {
  const teamAllTimeStats = generateAllTimeTeamStats(seasons, athletes);
  return (
    <div className="stats player-alltime-stats">
      <h3>Team All-Time Stats</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th title="Total Games">G</th>
            <th title="Wins">W</th>
            <th title="Losses">L</th>
            <th title="Ties">T</th>
            <th title="Winning Percentage">PCT</th>
          </tr>
        </thead>
        <tbody>
          {teamAllTimeStats.map(({ name, stats }) => {
            const { w, l, t, pct } = stats;
            return (
              <tr key={name}>
                <th>
                  <Link href={`./player/${name}`}>{name}</Link>
                </th>
                <td>{w + l + t}</td>
                <td>{w}</td>
                <td>{l}</td>
                <td>{t}</td>
                <td>{pct}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th title="Points for">PF</th>
            <th title="Points against">PA</th>
            <th title="Points-per-game ">PPG</th>
            <th title="Points against per-game">PAPG</th>
            <th title="Point differential">DIFF</th>
          </tr>
        </thead>
        <tbody>
          {teamAllTimeStats.map(({ name, stats }) => {
            const { pf, pa, ppg, papg, diff } = stats;
            return (
              <tr key={name}>
                <th>
                  <Link href={`./player/${name}`}>{name}</Link>
                </th>
                <td>{pf}</td>
                <td>{pa}</td>
                <td>{ppg}</td>
                <td>{papg}</td>
                <td>{diff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
