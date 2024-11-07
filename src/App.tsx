import { links, players, season, teams } from "./data";
import { useSeason } from "./useSeason";
import "./App.scss";

const App = () => {
  const { record: chargersRecord, breakdown: chargersPointsBreakdown } =
    useSeason(season.map(({ Chargers }) => Chargers.score));
  const { record: brownsRecord, breakdown: brownsPointsBreakdown } = useSeason(
    season.map(({ Browns }) => Browns.score),
  );

  return (
    <div>
      <h1>Fall 2024</h1>
      <div id="layout">
        <div id="schedule">
          <table>
            <thead>
              <tr>
                <th></th>
                {teams
                  .map((team) => ({
                    record:
                      team.name === "Chargers" ? chargersRecord : brownsRecord,
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

        <div id="total-points">
          <h3>Total Points</h3>
          <ul>
            <li>Chargers: {chargersPointsBreakdown}</li>
            <li>Browns: {brownsPointsBreakdown}</li>
          </ul>
        </div>

        <div id="players">
          <table>
            <thead>
              <tr>
                <th></th>
                {players.map(({ name }) => (
                  <th key={name}>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(["catches", "touchdowns", "interceptions"] as const).map(
                (stat) => (
                  <tr key={stat}>
                    <th>{stat}</th>
                    {players.map((player) => (
                      <td key={`${player.name}-${player[stat]}`}>
                        {player[stat]}
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>

        <div id="rosters">
          {teams.map(({ name, players }) => (
            <div key={name}>
              <h3>{name}</h3>
              <ul>
                {players.map((player) => (
                  <li key={player}>{player}</li>
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
        </div>
      </div>
    </div>
  );
};

export default App;
