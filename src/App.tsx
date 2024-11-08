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
                  .map(({ name, city, record, color, secondaryColor }) => (
                    <th
                      key={name}
                      title={`${city} ${name}`}
                      style={{
                        backgroundColor: color,
                        color: secondaryColor,
                      }}
                    >
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
                            <span>{time}</span>
                          ) : (
                            <span className={win ? "win" : "loss"}>
                              {win ? "W" : "L"} {score}
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
          <h2>Team Stats</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th title="Wins">W</th>
                <th title="Losses">L</th>
                <th title="Ties">T</th>
                <th title="Winning Percentage">PCT</th>
                <th title="Total Points For">PF</th>
                <th title="Total Points Against">PA</th>
                <th title="Point Differential">DIFF</th>
                <th title="Current Streak">STRK</th>
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
          <h2>Player Stats</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th title="Receptions (catches)">REC</th>
                <th title="Touchdowns">TD</th>
                <th title="Interceptions">INT</th>
                <th title="Sacks">SACK</th>
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
          {teams.map(({ name, players, brink }) => (
            <div key={name}>
              <h2>{name}</h2>
              <ul>
                {players.map((player) => (
                  <li key={player} className={player === brink ? "brink" : ""}>
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
          </ul>
          <div id="login">tracysss@yahoo.com-1414Du</div>
        </div>
      </div>
    </div>
  );
};

export default App;
