# code-snippets

Code snippets with gifs, to avoid copy and paste the code and write it all.

## Table of Contents

- [forEach](#forEach)

- [reduce](#reduce)

- [filter](#filter)

- [map](#map)

- [sort](#sort)

## forEach

> Example:

```javascript
const array = ['this', 'is', 'a', 'test'];

array.forEach((item, index) => {

});
```

> Gif:

![Escribir forEach paso a paso](es6/forEach/forEach.gif?raw=true)

## reduce

> Example:

```javascript
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
```

> Gif:

![Escribir forEach paso a paso](es6/reduce/reduce.gif?raw=true)

> [Useful use cases](https://itnext.io/useful-reduce-use-cases-91a86ee10bcd).

## filter

> Example:

```javascript
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
```

```javascript
const fifteen = inventors.filter(inventor => (
   inventor.year >= 1500 && inventor.year < 1600
));
```

## map

> Example:

```javascript
const fullNames = inventors.map(inventor => (
    `${inventor.first} ${inventor.last}`
));
```

## sort

> Example:

```javascript
const ordered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
```

```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
```

Note: Examples from [JavaScript 30 from Mike Ekkel](https://medium.com/@murkrage/javascript-30-day-4-array-cardio-day-1-26a0d05b36df)

## Files for each snippet

There is a file for each functionality, to be able to execute it.

Example:

- File es6/forEach/forEach.js

  - Make it executable:

  ```
  chmod +x es6/forEach/forEach.js
  ```

  - Run it:

  ```
  ./es6/forEach/forEach.js
  ```
