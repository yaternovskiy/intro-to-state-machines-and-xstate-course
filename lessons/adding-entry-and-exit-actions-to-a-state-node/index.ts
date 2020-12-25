const { Machine } = require('xstate')

const lightBulbMachine = Machine(
  {
    id: 'lightBulb',
    initial: 'unlit',
    states: {
      lit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'unlit',
        },
      },
      unlit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'lit',
        },
      },
      broken: {
        entry: ['logBroken']
      },
    },
  },
  {
    actions: {
      logBroken: (context, event) => {
        console.log(`yo i am broke ${event.location}`)
      },
    },
  }
)

console.log(lightBulbMachine.transition('unlit', 'BREAK'))
