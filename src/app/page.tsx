import Link from "next/link";
import { links, seasons } from "@/data";
import { generateAllTimePlayerStats } from "@/generateAllTimePlayerStats";
import { generateAllTimeTeamStats } from "@/generateAllTimeTeamStats";
import { Season } from "@/components/Season";
import "@/global.scss";

export default function Page() {
  const playerAllTimeStats = generateAllTimePlayerStats(seasons);
  const teamAllTimeStats = generateAllTimeTeamStats();
  return (
    <div>
      <h1>
        <a href="./">Flag Football</a>
      </h1>
      <div id="layout">
        <div>
          {seasons.map((season) => (
            <Season key={season.id} {...season} />
          ))}

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

          <br />

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
        </div>

        <div id="footer">
          <div className="links">
            <ul>
              {links.map(({ name, url }) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul>
            <li>
              <a href="https://www.xlapex.com/">xlapex.com</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/jonbri/flag/">GitHub</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://jonbri.github.io/keep/">Keep</a>
            </li>
          </ul>
          <div id="login">trxxysss@y*h**/1414Du</div>
        </div>
      </div>
    </div>
  );
}
