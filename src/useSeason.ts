export const useSeason = (scores: (string | undefined)[]) => {
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

  return {
    wins,
    losses,
    ties,
    record: `${wins}-${losses}${ties > 0 ? `-${ties}` : ""}`,
    forPoints,
    againstPoints,
  };
};
