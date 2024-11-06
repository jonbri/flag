import { players, season, teams } from "./data";
import { useStats } from "./useStats";
import "./App.scss";

const App = () => {
  const {
    record: chargersRecord,
    forPoints: chargersTotalForPoints,
    againstPoints: chargersTotalAgainstPoints,
  } = useStats(season.map(({ Chargers }) => Chargers.score));
  const {
    record: brownsRecord,
    forPoints: brownsTotalForPoints,
    againstPoints: brownsTotalAgainstPoints,
  } = useStats(season.map(({ Browns }) => Browns.score));

  return (
    <div>
      <h1>Fall 2024</h1>
      <div id="layout">
        <div id="schedule">
          <table>
            <thead>
              <tr>
                <th></th>
                {teams.map(({ name }) => (
                  <th key={name}>
                    {name}{" "}
                    <span className="record">
                      ({name === "Chargers" ? chargersRecord : brownsRecord})
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {season.map(({ date, Chargers, Browns }) => {
                const {
                  score: chargersScore,
                  opponent: chargersOpponent,
                  home: chargersHome,
                  time: chargersTime,
                } = Chargers;
                const {
                  score: brownsScore,
                  opponent: brownsOpponent,
                  home: brownsHome,
                  time: brownsTime,
                } = Browns;
                if (chargersScore && brownsScore) {
                  const chargersPoints = chargersScore.split("-")[0];
                  const chargersOpponentsPoints = chargersScore.split("-")[1];
                  const brownsPoints = brownsScore.split("-")[0];
                  const brownsOpponentsPoints = brownsScore.split("-")[1];
                  const chargersWinLoss =
                    chargersPoints > chargersOpponentsPoints ? "W" : "L";
                  const brownsWinLoss =
                    brownsPoints > brownsOpponentsPoints ? "W" : "L";
                  return (
                    <tr key={date}>
                      <th>{date}</th>
                      <td>
                        {chargersHome ? (
                          <strong>{chargersOpponent}</strong>
                        ) : (
                          chargersOpponent
                        )}{" "}
                        <span
                          className={`record ${
                            chargersPoints > chargersOpponentsPoints
                              ? "win"
                              : "loss"
                          }`}
                        >
                          ({chargersWinLoss} {chargersScore})
                        </span>
                      </td>
                      <td>
                        {brownsHome ? (
                          <strong>{brownsOpponent}</strong>
                        ) : (
                          brownsOpponent
                        )}{" "}
                        <span
                          className={`record ${
                            brownsPoints > brownsOpponentsPoints
                              ? "win"
                              : "loss"
                          }`}
                        >
                          ({brownsWinLoss} {brownsScore})
                        </span>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={date}>
                      <th>{date}</th>
                      <td>
                        {chargersHome ? (
                          <strong>{chargersOpponent}</strong>
                        ) : (
                          chargersOpponent
                        )}{" "}
                        {chargersTime}
                      </td>
                      <td>
                        {brownsHome ? (
                          <strong>{brownsOpponent}</strong>
                        ) : (
                          brownsOpponent
                        )}{" "}
                        {brownsTime}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>

        <div id="total-points">
          <h3>Total Points</h3>
          {teams.map(({ name }) => {
            const totalPoints =
              name === "Chargers"
                ? chargersTotalForPoints
                : brownsTotalForPoints;
            const opponentsTotalPoints =
              name === "Chargers"
                ? chargersTotalAgainstPoints
                : brownsTotalAgainstPoints;
            return (
              <ul key={name}>
                <li>
                  {name}: {totalPoints} / {opponentsTotalPoints}
                </li>
              </ul>
            );
          })}
        </div>

        <div id="players">
          {players.map(({ name, ...stats }) => {
            return (
              <div key={name}>
                <h3>{name}</h3>
                <ul>
                  <li>Catches: {stats.catches}</li>
                  <li>Touchdowns: {stats.touchdowns}</li>
                  <li>Interceptions: {stats.interceptions}</li>
                </ul>
              </div>
            );
          })}
        </div>

        <div id="rosters">
          {teams.map(({ name, players }) => {
            return (
              <div key={name}>
                <h3>{name}</h3>
                <ul>
                  {players.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div id="footer">
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Los_Angeles_Chargers">
                Chargers
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Cleveland_Browns">
                Browns
              </a>
            </li>
            <li>
              <a href="https://www.xlapex.com/">
                xlapex.com <span>(tracysss@yahoo.com-1414Du)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
