import Image from "next/image";
import { GameStats } from "@/types";
import { links, seasons } from "@/data";
import { generateStats } from "@/generateStats";
import "@/global.scss";

export default function Page() {
  return (
    <div>
      <h1>
        <a href="./">Flag Football</a>
      </h1>
      <div id="layout">
        <div>
          {seasons.map(({ name, teams, weeks }) => {
            const weekStats = weeks.map(({ teams }) => {
              const scores = teams.reduce<{ [index: string]: GameStats }>(
                (acc, { stats }) => {
                  if (!stats) return acc;
                  const re = { ...acc, ...stats };
                  return re;
                },
                {},
              );
              return scores;
            });
            const playerStats: { [index: string]: GameStats } =
              weekStats.reduce((acc, stats) => {
                for (const [name, stat] of Object.entries(stats)) {
                  if (!acc[name]) {
                    acc[name] = { rec: 0, td: 0, int: 0, sack: 0, safety: 0 };
                  }
                  acc[name] = {
                    rec: acc[name].rec + stat.rec,
                    td: acc[name].td + stat.td,
                    int: acc[name].int + stat.int,
                    sack: acc[name].sack + stat.sack,
                    safety: acc[name].safety + stat.safety,
                  };
                }
                return acc;
              }, {});

            const teamData = teams.map((team) => {
              const scores = weeks
                .map(({ teams }) =>
                  teams.find(({ team: teamName }) => teamName === team.name),
                )
                .map((team) => team?.score);
              return {
                ...team,
                ...generateStats(scores),
              };
            });
            const hasToday = weeks.some(
              ({ date }) =>
                new Date(date).toDateString() === new Date().toDateString(),
            );
            return (
              <div key={name} className="season hasToday">
                <h2>
                  <a href="./">{name}</a>
                </h2>
                <div className="schedule">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th
                          style={{
                            width: "45px",
                          }}
                        ></th>
                        {teamData.map(
                          ({ name, city, record, color, secondaryColor }) => (
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
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {weeks.map(({ date, teams }, i) => {
                        const gameDate = new Date(date);
                        const isDateInPast = gameDate < new Date();
                        const isToday =
                          gameDate.toDateString() === new Date().toDateString();
                        const isWithin6DaysFromToday =
                          Math.abs(gameDate.getTime() - new Date().getTime()) <
                          1000 * 60 * 60 * 24 * 6;
                        const isGameWeek =
                          !isDateInPast && isWithin6DaysFromToday;
                        let className = "";
                        const haveAllTeamsPlayedToday = teams.every(
                          ({ score }) => score !== undefined,
                        );

                        if (isToday && !haveAllTeamsPlayedToday) {
                          className = "today";
                        } else if (!hasToday || haveAllTeamsPlayedToday) {
                          if (isGameWeek) {
                            className = "thisweek";
                          } else if (isDateInPast) {
                            className = "past";
                          } else {
                            className = "future";
                          }
                        }
                        return (
                          <tr key={date} className={className}>
                            <th>{i + 1}</th>
                            <th>{date.split(" ").slice(0, 2).join(" ")}</th>
                            {teams.map(
                              ({ score = "1000-0", home, opponent, time }) => {
                                const [forPoints, againstPoints] =
                                  score.split("-");
                                const win =
                                  parseInt(forPoints) > parseInt(againstPoints);
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
                                    {home ? (
                                      <strong>{opponent}</strong>
                                    ) : (
                                      opponent
                                    )}{" "}
                                    {score === "1000-0" ? (
                                      <span>{`${time}pm`}</span>
                                    ) : (
                                      <span className={`score ${wlClassName}`}>
                                        {`${wlt} ${score}`}
                                      </span>
                                    )}
                                  </td>
                                );
                              },
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="stats team-stats">
                  <h3>Team Stats</h3>
                  <div>
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
                        {teamData.map(
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
                        {teamData.map(
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
                                <td className={diffClassName}>
                                  {diff > 0 ? `+${diff}` : diff}
                                </td>
                              </tr>
                            );
                          },
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="stats player-stats">
                  <h3>Player Stats</h3>
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
                      {Object.entries(playerStats).map(([name, stats]) => {
                        const { rec, td, int, sack, safety } = stats;
                        return (
                          <tr key={name}>
                            <th>{name}</th>
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

                <div className="rosters">
                  <h3>Rosters</h3>
                  <div>
                    {teams.map(({ name, players, brink }) => (
                      <div key={name}>
                        <h4>{name}</h4>
                        <ul>
                          {players.map((player) => (
                            <li
                              key={player}
                              className={player === brink ? "brink" : ""}
                            >
                              {player}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>

        <div>
          <Image
            src="./chargers2024.jpg"
            width={500}
            height={500}
            alt="Chargers 2024"
          />
          <Image
            src="./browns2024.jpg"
            width={500}
            height={500}
            alt="Browns 2024"
          />
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
}
