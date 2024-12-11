import { expect, test } from "vitest";
import { generateStats } from "./generateStats";

test("empty array", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    [],
  );
  expect(w).toEqual(0);
  expect(l).toEqual(0);
  expect(t).toEqual(0);
  expect(pct).toEqual("1.000");
  expect(record).toEqual("0-0");
  expect(pf).toEqual(0);
  expect(pa).toEqual(0);
  expect(ppg).toEqual(0);
  expect(papg).toEqual(0);
  expect(diff).toEqual(0);
  expect(strk).toEqual("");
});

test("one score", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["1-0"],
  );
  expect(w).toEqual(1);
  expect(l).toEqual(0);
  expect(t).toEqual(0);
  expect(pct).toEqual("1.000");
  expect(record).toEqual("1-0");
  expect(pf).toEqual(1);
  expect(pa).toEqual(0);
  expect(ppg).toEqual(1);
  expect(papg).toEqual(0);
  expect(diff).toEqual(1);
  expect(strk).toEqual("W1");
});

test("one win and one loss", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["10-0", "0-10"],
  );
  expect(w).toEqual(1);
  expect(l).toEqual(1);
  expect(t).toEqual(0);
  expect(pct).toEqual(".500");
  expect(record).toEqual("1-1");
  expect(pf).toEqual(10);
  expect(pa).toEqual(10);
  expect(ppg).toEqual(5);
  expect(papg).toEqual(5);
  expect(diff).toEqual(0);
  expect(strk).toEqual("L1");
});

test("two wins and one loss", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["10-0", "0-10", "20-0"],
  );
  expect(w).toEqual(2);
  expect(l).toEqual(1);
  expect(t).toEqual(0);
  expect(pct).toEqual(".667");
  expect(record).toEqual("2-1");
  expect(pf).toEqual(30);
  expect(pa).toEqual(10);
  expect(ppg).toEqual(10);
  expect(papg).toEqual(3.3);
  expect(diff).toEqual(20);
  expect(strk).toEqual("W1");
});

test("three wins and one loss", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["10-0", "0-10", "20-0", "5-0"],
  );
  expect(w).toEqual(3);
  expect(l).toEqual(1);
  expect(t).toEqual(0);
  expect(pct).toEqual(".750");
  expect(record).toEqual("3-1");
  expect(pf).toEqual(35);
  expect(pa).toEqual(10);
  expect(ppg).toEqual(8.8);
  expect(papg).toEqual(2.5);
  expect(diff).toEqual(25);
  expect(strk).toEqual("W2");
});

test("many scores ending in wins", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["10-20", "20-40", "30-60", "2-2", "80-0"],
  );
  expect(w).toEqual(1);
  expect(l).toEqual(3);
  expect(t).toEqual(1);
  expect(pct).toEqual(".200");
  expect(record).toEqual("1-3-1");
  expect(pf).toEqual(142);
  expect(pa).toEqual(122);
  expect(ppg).toEqual(28.4);
  expect(papg).toEqual(24.4);
  expect(diff).toEqual(20);
  expect(strk).toEqual("W1");
});

test("many scores ending in losses", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["6-2", "2-2", "2-2", "10-12", "15-20"],
  );
  expect(w).toEqual(1);
  expect(l).toEqual(2);
  expect(t).toEqual(2);
  expect(pct).toEqual(".200");
  expect(record).toEqual("1-2-2");
  expect(pf).toEqual(35);
  expect(pa).toEqual(38);
  expect(ppg).toEqual(7);
  expect(papg).toEqual(7.6);
  expect(diff).toEqual(-3);
  expect(strk).toEqual("L2");
});

test("ties", () => {
  const { w, l, t, pct, record, pf, pa, ppg, papg, diff, strk } = generateStats(
    ["0-0", "5-5", "100-100"],
  );
  expect(w).toEqual(0);
  expect(l).toEqual(0);
  expect(t).toEqual(3);
  expect(pct).toEqual(".000");
  expect(record).toEqual("0-0-3");
  expect(pf).toEqual(105);
  expect(pa).toEqual(105);
  expect(ppg).toEqual(35);
  expect(papg).toEqual(35);
  expect(diff).toEqual(0);
  expect(strk).toEqual("T3");
});
