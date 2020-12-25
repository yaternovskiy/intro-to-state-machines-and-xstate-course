const { Machine, interpret } = require('xstate')

const lightBulbMachine = Machine({
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
    broken: {  },
  },
})

//console.log(lightBulbMachine.transition('lit', 'TOGGLE').value)
const service = interpret(lightBulbMachine).start()


service.onTransition(state => {
  console.log(state.value)
})

service.send('TOGGLE')
service.send('TOGGLE')
service.send('BREAK')
service.send('TOGGLE')
service.send('BREAK')

service.stop()
