const teams = [
  {
    name: "Chargers",
    city: "Los Angeles",
    colors: ["blue", "yellow"],
    players: [
      "Austin",
      "Jaxon",
      "Cooper",
      "Oliver",
      "Boone",
      "Beckett",
      "Michael",
    ],
  },
  {
    name: "Browns",
    city: "Cleveland",
    colors: ["orange", "brown"],
    players: [
      "Jason",
      "Tyler",
      "Jacob",
      "Ben",
      "Brooks",
      "Aiden",
      "Joel",
      "Vladimir",
      "Andrey",
    ],
  },
];

const data = [
  {
    date: "Oct 26",
    chargers: {
      opponent: "Broncos",
      home: false,
      score: "19-40",
    },
    browns: {
      opponent: "Dolphins",
      home: true,
      score: "52-32",
    },
  },
  {
    date: "Nov 2",
    chargers: {
      opponent: "Bengals",
      home: true,
      score: "18-38",
    },
    browns: {
      opponent: "Raiders",
      home: false,
      score: "32-30",
    },
  },
  {
    date: "Nov 9",
    chargers: {
      time: "3:00",
      opponent: "Steelers",
      home: false,
    },
    browns: {
      time: "2:00",
      opponent: "Broncos",
      home: true,
    },
  },
  {
    date: "Nov 16",
    chargers: {
      time: "12:00",
      opponent: "Steelers",
      home: true,
    },
    browns: {
      time: "1:00",
      opponent: "Bills",
      home: false,
    },
  },
  {
    date: "Nov 23",
    chargers: {
      time: "5:00",
      opponent: "Ravens",
      home: true,
    },
    browns: {
      time: "12:00",
      opponent: "Steelers",
      home: false,
    },
  },
  {
    date: "Nov 30",
    chargers: {
      time: "5:00",
      opponent: "Broncos",
      home: true,
    },
    browns: {
      time: "4:00",
      opponent: "Patriots",
      home: true,
    },
  },
  {
    date: "Dec 7",
    chargers: {
      time: "3:00",
      opponent: "Browns",
      home: true,
    },
    browns: {
      time: "3:00",
      opponent: "Chargers",
      home: false,
    },
  },
  {
    date: "Dec 14",
    chargers: {
      time: "4:00",
      opponent: "Bills",
      home: true,
    },
    browns: {
      time: "3:00",
      opponent: "Chiefs",
      home: false,
    },
  },
];

const players = {
  Austin: {
    catches: 1,
    touchdowns: 0,
    interceptions: 0,
  },
  Jason: {
    catches: 2,
    touchdowns: 1,
    interceptions: 1,
  },
};

module.exports = { teams, data, players };
