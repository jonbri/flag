import Link from "next/link";
import { GameStats, Season as SeasonType } from "@/types";
import { generateTeamStats } from "@/generateTeamStats";

export const Season = ({ id, name, teams, weeks, notes }: SeasonType) => {
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
  const playerStats: { [index: string]: GameStats } = weekStats.reduce(
    (acc, stats) => {
      for (const [name, stat] of Object.entries(stats)) {
        if (!acc[name]) {
          acc[name] = { rec: 0, td: 0, int: 0, sack: 0, safety: 0, picksix: 0 };
        }
        acc[name] = {
          rec: acc[name].rec + stat.rec,
          td: acc[name].td + stat.td,
          int: acc[name].int + stat.int,
          sack: acc[name].sack + stat.sack,
          safety: acc[name].safety + stat.safety,
          picksix: acc[name].picksix + stat.picksix,
        };
      }
      return acc;
    },
    {},
  );

  const teamData = teams.map((team) => {
    const scores = weeks
      .map(({ teams }) =>
        teams.find(({ team: teamName }) => teamName === team.name),
      )
      .map((team) => team?.score);
    return {
      ...team,
      ...generateTeamStats(scores),
    };
  });
  const hasToday = weeks.some(
    ({ date }) => new Date(date).toDateString() === new Date().toDateString(),
  );

  const haveAnyGamesBeenPlayedYet = weeks.some(({ teams }) =>
    teams.some(({ score }) => score !== undefined),
  );
  return (
    <div key={name} className="season hasToday">
      <h2>
        <Link href={`./season/${id}`}>{name}</Link>
      </h2>
      <div>{notes}</div>
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
                ({ name, city, record, colors: { primary, secondary } }) => (
                  <th
                    key={name}
                    title={`${city} ${name}`}
                    style={{
                      backgroundColor: primary,
                      color: secondary,
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
              const isNextGame =
                gameDate <
                new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000);
              const isGameWeek = !isDateInPast && isNextGame;
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
                    (
                      {
                        score = "1000-0",
                        home = false,
                        opponent = "Unknown",
                        time = "UNK",
                      },
                      j,
                    ) => {
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

                      let formattedTime = "";
                      if (time !== "UNK") {
                        formattedTime = `${time}pm`;
                        if (parseInt(time) === 11 || parseInt(time) === 10) {
                          formattedTime = `${time}am`;
                        }
                      }

                      let formattedScore = score;
                      if (score === "1-0" || score === "0-1") {
                        formattedScore = "";
                      }

                      return (
                        <td key={`${opponent}-${time}-${score}-${i}-${j}`}>
                          {home ? <strong>{opponent}</strong> : opponent}{" "}
                          {score === "1000-0" ? (
                            <span>{formattedTime}</span>
                          ) : (
                            <span className={`score ${wlClassName}`}>
                              {`${wlt} ${formattedScore}`}
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

      {haveAnyGamesBeenPlayedYet ? (
        <div className="stats team-stats">
          <h3>Game notes</h3>
          <div>
            {weeks
              .map(({ date, teams }) => {
                const notes = teams.reduce((acc, { notes }) => {
                  if (!notes) return acc;
                  return `${acc} ${notes}`;
                }, "");
                const display = `${date}: ${notes}`;
                return notes === "" ? null : display;
              })
              .filter((notes) => notes !== null)
              .map((notes, i) => {
                return <div key={i}>{notes}</div>;
              })}
          </div>
        </div>
      ) : null}

      {haveAnyGamesBeenPlayedYet ? (
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
                {teamData.map(({ shortName, w, l, t, pct, diff, strk }, i) => {
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
                })}
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
                {teamData.map(({ shortName, pf, pa, ppg, papg, diff }, i) => {
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
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {haveAnyGamesBeenPlayedYet ? (
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
                <th title="Pick Six">P6</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(playerStats).map(([name, stats]) => {
                const { rec, td, int, sack, safety, picksix } = stats;
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
                    <td>{picksix}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      <div className="rosters">
        <h3>Roster</h3>
        <div>
          {teams.map(({ name, players, brink }) => (
            <div key={name}>
              <h4>{name}</h4>
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
      </div>
      <div className="separator" />
    </div>
  );
};
