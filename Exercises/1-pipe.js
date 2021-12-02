'use strict';

const pipe = (...fns) => {
  if (fns.find(fn => typeof fn !== 'function') !== undefined) {
    throw new Error('An argument is not a function');
  } else {
    return x => fns.reduce((pr, curr) => curr(pr), x);
  }
};

module.exports = { pipe };
