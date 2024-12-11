export const generateStats = (scores: (string | undefined)[]) => {
  const [wins, losses, ties] = scores.reduce(
    ([wins, losses, ties], score) => {
      const [forPoints, againstPoints] = score?.split("-").map(Number) ?? [
        0, 0,
      ];
      return score
        ? [
            wins + (forPoints > againstPoints ? 1 : 0),
            losses + (forPoints < againstPoints ? 1 : 0),
            ties + (forPoints === againstPoints ? 1 : 0),
          ]
        : [wins, losses, ties];
    },
    [0, 0, 0],
  );

  const [forPoints, againstPoints] = scores.reduce(
    ([forPoints, againstPoints], score) =>
      score
        ? [
            forPoints + parseInt(score.split("-")[0]),
            againstPoints + parseInt(score.split("-")[1]),
          ]
        : [forPoints, againstPoints],
    [0, 0],
  );

  const reversedScores = scores.slice().reverse().filter(Boolean);
  let strk = "";
  if (reversedScores[0]) {
    const [lastPointsFor, lastPointsAgainst] = reversedScores[0]
      .split("-")
      .map(Number);
    if (lastPointsFor > lastPointsAgainst) {
      strk = "W1";
    } else if (lastPointsFor < lastPointsAgainst) {
      strk = "L1";
    } else {
      strk = "T1";
    }
    for (const score of reversedScores.slice(1)) {
      if (!score) break;
      const [pf, pa] = score.split("-").map(Number);
      if (strk[0] === "W" && pf > pa) {
        strk = `W${parseInt(strk.slice(1)) + 1}`;
      } else if (strk[0] === "L" && pf < pa) {
        strk = `L${parseInt(strk.slice(1)) + 1}`;
      } else if (strk[0] === "T" && pf === pa) {
        strk = `T${parseInt(strk.slice(1)) + 1}`;
      } else {
        break;
      }
    }
  }

  let winningPercentage = "1.000";
  if (wins + losses + ties > 0) {
    winningPercentage = (wins / (wins + losses + ties)).toFixed(3);
    if (winningPercentage[0] === "0") {
      winningPercentage = winningPercentage.slice(1);
    }
  }

  const gamesPlayed = wins + losses + ties;
  const ppg = gamesPlayed > 0 ? forPoints / gamesPlayed : 0;
  const papg = gamesPlayed > 0 ? againstPoints / gamesPlayed : 0;

  const roundToTenth = (num: number) => Math.round(num * 10) / 10;

  return {
    w: wins,
    l: losses,
    t: ties,
    pct: winningPercentage,
    pf: forPoints,
    pa: againstPoints,
    ppg: roundToTenth(ppg),
    papg: roundToTenth(papg),
    record: `${wins}-${losses}${ties > 0 ? `-${ties}` : ""}`,
    diff: forPoints - againstPoints,
    strk,
  };
};
