const fs = require("fs");
const { teams, data } = require("./data");

const chargersWins = data.filter(
  ({ chargers }) =>
    chargers.score &&
    chargers.score.split("-")[0] > chargers.score.split("-")[1],
).length;
const brownsWins = data.filter(
  ({ browns }) =>
    browns.score && browns.score.split("-")[0] > browns.score.split("-")[1],
).length;

const chargersLosses = data.filter(
  ({ chargers }) =>
    chargers.score &&
    chargers.score.split("-")[0] < chargers.score.split("-")[1],
).length;
const brownsLosses = data.filter(
  ({ browns }) =>
    browns.score && browns.score.split("-")[0] < browns.score.split("-")[1],
).length;

const chargersRecord = `${chargersWins}-${chargersLosses}`;
const brownsRecord = `${brownsWins}-${brownsLosses}`;

const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flag</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Fall 2024</h1>

    <div id="layout">
      <div id="schedule">
        <table>
          <thead>
            <tr>
              <th></th>
              ${teams.map(({ name }) => `<th>${name} <span class="record">(${name === "Chargers" ? chargersRecord : brownsRecord})</span></th>`).join("")}
            </tr>
          </thead>
          <tbody>
          ${data
            .map(({ date, chargers, browns }) => {
              const {
                score: chargersScore,
                opponent: chargersOpponent,
                home: chargersHome,
                time: chargersTime,
              } = chargers;
              const {
                score: brownsScore,
                opponent: brownsOpponent,
                home: brownsHome,
                time: brownsTime,
              } = browns;
              if (chargersScore) {
                const chargersPoints = chargersScore.split("-")[0];
                const chargersOpponentsPoints = chargersScore.split("-")[1];
                const brownsPoints = brownsScore.split("-")[0];
                const brownsOpponentsPoints = brownsScore.split("-")[1];
                const chargersWinLoss =
                  chargersPoints > chargersOpponentsPoints ? "W" : "L";
                const brownsWinLoss =
                  brownsPoints > brownsOpponentsPoints ? "W" : "L";
                return `<tr>
                   <th>${date}</th>
                   <td>${chargersHome ? `<strong>${chargersOpponent}</strong>` : chargersOpponent}  <span class="record ${chargersPoints > chargersOpponentsPoints ? "win" : "loss"}">(${chargersWinLoss} ${chargersScore})</span></td>
                   <td>${brownsHome ? `<strong>${brownsOpponent}</strong>` : brownsOpponent} <span class="record ${brownsPoints > brownsOpponentsPoints ? "win" : "loss"}">(${brownsWinLoss} ${brownsScore})</span></td>
              </tr>`;
              } else {
                return `<tr>
                   <th>${date}</th>
                   <td>${chargersHome ? `<strong>${chargersOpponent}</strong>` : chargersOpponent} ${chargersTime}</td>
                   <td>${brownsHome ? `<strong>${brownsOpponent}</strong>` : brownsOpponent} ${brownsTime}</td>
              </tr>`;
              }
            })
            .join("")}
            </tbody>
        </table>
      </div>

      <div id="rosters">
          ${teams
            .map(({ name, players }) => {
              return `
          <div>
            <h3>${name}</h3>
            <ul>
              ${players.map((player) => `<li>${player}</li>`).join("")}
            </ul>
          </div>`;
            })
            .join("")}
    </div>

    <div id="footer">
      <a href="https://en.wikipedia.org/wiki/Los_Angeles_Chargers">Chargers</a>
      <a href="https://en.wikipedia.org/wiki/Cleveland_Browns">Browns</a>
      <br />
      <a href="https://www.xlapex.com/">xlapex.com</a>
      <div>tracysss@yahoo.com (1414Du)</div>
    </div>
    </div>
  </body>
</html>
`;

fs.writeFileSync("index.html", html);
