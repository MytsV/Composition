'use strict';

const compose = (...fns) => {
  const events = {};
  const f = x => {
    try {
      return fns.reverse().reduce((pr, curr) => curr(pr), x);
    } catch (e) {
      events['error'].forEach(fn => fn(e));
      return undefined;
    }
  };
  f.on = (name, fn) => {
    events[name] ? events[name].push(fn) : events[name] = [fn];
  };
  return f;
};

module.exports = { compose };
