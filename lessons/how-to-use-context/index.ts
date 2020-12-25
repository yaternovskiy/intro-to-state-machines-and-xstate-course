const { Machine, assign } = require('xstate')

const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  context: {
    color: 'white'
  },
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: assign({
            color: 'red'
           })
        }
      },
    },
    unlit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'lit',
        CHANGE_COLOR: {
          actions: ['changeColor'],
        }
      },
    },
    broken: { type: 'final' },
  },
},
{
  actions: {
    changeColor: assign((c, e) => (
      {
        color: e.color
      }
    ))
  }
})
