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
            <th title="Record"></th>
            <th title="Winning Percentage">PCT</th>
            <th title="Points for">PF</th>
            <th title="Points against">PA</th>
            <th title="Points-per-game ">PPG</th>
            <th title="Points against per-game">PAPG</th>
            <th title="Point differential">DIFF</th>
          </tr>
        </thead>
        <tbody>
          {teamAllTimeStats.map(({ name, stats }) => {
            const { pct, pf, pa, ppg, papg, record, diff } = stats;
            return (
              <tr key={name}>
                <th>
                  <Link href={`./player/${name}`}>{name}</Link>
                </th>
                <td>{record}</td>
                <td>{pct}</td>
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
