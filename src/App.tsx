import { links, players, season, teams } from "./data";
import { useSeason } from "./useSeason";
import "./App.scss";

const App = () => {
  const [chargersSeason, brownsSeason] = [
    {
      team: "Chargers",
      ...useSeason(season.map(({ Chargers }) => Chargers.score)),
    },
    {
      team: "Browns",
      ...useSeason(season.map(({ Browns }) => Browns.score)),
    },
  ];

  return (
    <div>
      <h1>
        <a href="./">Fall 2024</a>
      </h1>
      <div id="layout">
        <div id="schedule">
          <table>
            <thead>
              <tr>
                <th></th>
                {teams
                  .map((team) => ({
                    record:
                      team.name === "Chargers"
                        ? chargersSeason.record
                        : brownsSeason.record,
                    ...team,
                  }))
                  .map(({ name, record }) => (
                    <th key={name}>
                      {name} <span className="record">({record})</span>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {season.map(({ date, Chargers, Browns }) => (
                <tr key={date}>
                  <th>{date}</th>
                  {[Chargers, Browns].map(
                    ({ score = "1000-0", home, opponent, time }) => {
                      const [forPoints, againstPoints] = score.split("-");
                      const win = forPoints > againstPoints;
                      return (
                        <td key={`${opponent}-${time}-${score}`}>
                          {home ? <strong>{opponent}</strong> : opponent}{" "}
                          {score === "1000-0" ? (
                            time
                          ) : (
                            <span className={`record ${win ? "win" : "loss"}`}>
                              ({win ? "W" : "L"} {score})
                            </span>
                          )}
                        </td>
                      );
                    },
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="team-stats" className="stats">
          <h3>Team Stats</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                <th>PCT</th>
                <th>PF</th>
                <th>PA</th>
                <th>DIFF</th>
                <th>STRK</th>
              </tr>
            </thead>
            <tbody>
              {[chargersSeason, brownsSeason].map(
                ({ team, w, l, t, pct, pf, pa, diff, strk }, i) => (
                  <tr key={`${diff}-${i}`}>
                    <th>{team}</th>
                    <td>{w}</td>
                    <td>{l}</td>
                    <td>{t}</td>
                    <td>{pct}</td>
                    <td>{pf}</td>
                    <td>{pa}</td>
                    <td>{diff}</td>
                    <td>{strk}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>

        <div id="player-stats" className="stats">
          <h3>Player Stats</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>REC</th>
                <th>TD</th>
                <th>INT</th>
                <th>SACK</th>
              </tr>
            </thead>
            <tbody>
              {players.map(({ name, rec, td, int, sack }) => (
                <tr key={name}>
                  <th>{name}</th>
                  <td>{rec}</td>
                  <td>{td}</td>
                  <td>{int}</td>
                  <td>{sack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="rosters">
          {teams.map(({ name, players }) => (
            <div key={name}>
              <h3>{name}</h3>
              <ul>
                {players.map((player) => (
                  <li
                    key={player}
                    className={
                      ["Austin", "Jason"].includes(player) ? "brink" : ""
                    }
                  >
                    {player}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="footer">
          <ul>
            {links.map(({ name, url }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
            <div id="login">tracysss@yahoo.com-1414Du</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
