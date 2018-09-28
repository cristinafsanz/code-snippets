#!/usr/bin/env node

const array = ['this', 'is', 'a', 'test'];

// ES6
array.forEach((item1, index1) => {
  console.log({item1});
  console.log({index1});
});

// ES5
array.forEach(function(item2, index2) {
  console.log({item2});
  console.log({index2});
});
