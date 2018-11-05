#!/usr/bin/env node

// From https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d 

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
];

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log({ totalYears });

