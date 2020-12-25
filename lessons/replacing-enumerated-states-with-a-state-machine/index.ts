const { Machine } = require('xstate')

const lit = {
  on: {
    TOGGLE: 'unlit'
  }
};
const unlit = {
  on: {
    TOGGLE: 'lit'
  }
};
const broken = {
  type: {
    final: true
  }
};

const states = { lit, unlit, broken }

const initial = 'unlit';

const m = Machine({
  id: 'lightBulb',
  states,
  initial,
  strict: true,
})

console.log(m.transition('broken', 'TOGGLE').value)
