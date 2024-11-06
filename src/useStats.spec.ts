import { expect, test } from "vitest";
import { useStats } from "./useStats";

test("empty array", () => {
  const { wins, losses, ties, record, forPoints, againstPoints } = useStats([]);
  expect(wins).toEqual(0);
  expect(losses).toEqual(0);
  expect(ties).toEqual(0);
  expect(record).toEqual("0-0");
  expect(forPoints).toEqual(0);
  expect(againstPoints).toEqual(0);
});

test("one score", () => {
  const { wins, losses, ties, record, forPoints, againstPoints } = useStats([
    "1-0",
  ]);
  expect(wins).toEqual(1);
  expect(losses).toEqual(0);
  expect(ties).toEqual(0);
  expect(record).toEqual("1-0");
  expect(forPoints).toEqual(1);
  expect(againstPoints).toEqual(0);
});

test("many scores", () => {
  const { wins, losses, ties, record, forPoints, againstPoints } = useStats([
    "10-20",
    "20-40",
    "30-60",
    "2-2",
    "80-0",
  ]);
  expect(wins).toEqual(1);
  expect(losses).toEqual(3);
  expect(ties).toEqual(1);
  expect(record).toEqual("1-3-1");
  expect(forPoints).toEqual(142);
  expect(againstPoints).toEqual(122);
});

test("only ties", () => {
  const { wins, losses, ties, record, forPoints, againstPoints } = useStats([
    "0-0",
    "5-5",
    "100-100",
  ]);
  expect(wins).toEqual(0);
  expect(losses).toEqual(0);
  expect(ties).toEqual(3);
  expect(record).toEqual("0-0-3");
  expect(forPoints).toEqual(105);
  expect(againstPoints).toEqual(105);
});
