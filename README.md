# code-snippets

Code snippets with gifs, to avoid copy and paste the code and write it all.

## Table of Contents

- [forEach](#forEach)

- [reduce](#reduce)

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
