const { Machine } = require('xstate')

const lightBulbMachine = Machine({
  id: 'lightBulb',
  initial: 'unlit',
  states: {
    lit: {
      on: {
        BREAK: {
          target: 'broken',
          actions: ['logBroken'],
        },
        TOGGLE: 'unlit',
      },
    },
    unlit: {
      on: {
        BREAK: {
          target: 'broken',
          actions: ['logBroken'],
        },
        TOGGLE: 'lit',
      },
    },
    broken: {},
  },
},
{
  actions: {
    logBroken: (context, event) => {
      return console.log(`Bulb is broken in ${event.location}`)
    }
  }
})

console.log(lightBulbMachine.transition('lit', 'BREAK').value)
