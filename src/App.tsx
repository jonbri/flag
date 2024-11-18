import { links, players, season, teams } from "./data";
import { useSeason } from "./useSeason";
import "./App.scss";

const App = () => {
  const [chargersSeason, brownsSeason] = [
    {
      name: "Chargers",
      shortName: "LA",
      ...useSeason(season.map(({ Chargers }) => Chargers.score)),
    },
    {
      name: "Browns",
      shortName: "CLE",
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
                  <th
                    className={Chargers.score === undefined ? "future" : "past"}
                  >
                    {date}
                  </th>
                  {[Chargers, Browns].map(
                    ({ score = "1000-0", home, opponent, time }) => {
                      const [forPoints, againstPoints] = score.split("-");
                      const win = parseInt(forPoints) > parseInt(againstPoints);
                      const loss =
                        parseInt(forPoints) < parseInt(againstPoints);
                      let wlClassName = "neutral";
                      if (win) {
                        wlClassName = "positive";
                      } else if (loss) {
                        wlClassName = "negative";
                      }
                      let wlt = "T";
                      if (win) {
                        wlt = "W";
                      } else if (loss) {
                        wlt = "L";
                      }
                      return (
                        <td key={`${opponent}-${time}-${score}`}>
                          {home ? <strong>{opponent}</strong> : opponent}{" "}
                          {score === "1000-0" ? (
                            <span>{`${time}pm`}</span>
                          ) : (
                            <span className={wlClassName}>
                              {wlt} {score}
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
                <th title="Current Streak">STRK</th>
              </tr>
            </thead>
            <tbody>
              {[chargersSeason, brownsSeason].map(
                ({ shortName, w, l, t, pct, diff, strk }, i) => {
                  let strkClassName = "neutral";
                  if (strk.toLowerCase().startsWith("w")) {
                    strkClassName = "positive";
                  } else if (strk.toLowerCase().startsWith("l")) {
                    strkClassName = "negative";
                  }
                  return (
                    <tr key={`${diff}-${i}`}>
                      <th>{shortName}</th>
                      <td>{w}</td>
                      <td>{l}</td>
                      <td>{t}</td>
                      <td>{pct}</td>
                      <td className={strkClassName}>{strk}</td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
          <br />
          <table>
            <thead>
              <tr>
                <th></th>
                <th title="Total Points For">PF</th>
                <th title="Total Points Against">PA</th>
                <th title="Points Per Game">PPG</th>
                <th title="Points Against Per Game">PAPG</th>
                <th title="Point Differential">DIFF</th>
              </tr>
            </thead>
            <tbody>
              {[chargersSeason, brownsSeason].map(
                ({ shortName, pf, pa, ppg, papg, diff }, i) => {
                  let diffClassName = "neutral";
                  if (diff > 0) {
                    diffClassName = "positive";
                  } else if (diff < 0) {
                    diffClassName = "negative";
                  }
                  return (
                    <tr key={`${diff}-${i}`}>
                      <th>{shortName}</th>
                      <td>{pf}</td>
                      <td>{pa}</td>
                      <td>{ppg}</td>
                      <td>{papg}</td>
                      <td className={diffClassName}>{diff}</td>
                    </tr>
                  );
                },
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
                <th title="Safeties">SFTY</th>
              </tr>
            </thead>
            <tbody>
              {players.map(({ name, rec, td, int, sack, safety }) => (
                <tr key={name}>
                  <th>{name}</th>
                  <td>{rec}</td>
                  <td>{td}</td>
                  <td>{int}</td>
                  <td>{sack}</td>
                  <td>{safety}</td>
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
          <ul>
            <li>
              <a href="https://www.xlapex.com/">xlapex.com</a>
            </li>
          </ul>
          <div id="login">tracysss@yahoo.com-1414Du</div>
        </div>
      </div>
    </div>
  );
};

export default App;
