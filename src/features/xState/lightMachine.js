import { interpret, Machine } from "xstate";

const lightMachine = createMachine({
  states: {
    initial: "red",
    red: {
      on: {
        CLICK: "green",
      },
    },
    green: {
      on: {
        CLICK: "yellow",
      },
    },
    yellow: {
      on: {
        CLICK: "red",
      },
    },
  },
});

// const state0 = lightMachine.initialState;
// console.log(state0);
// const state1 = lightMachine.transition(state0, 'CLICK')
// console.log(state1);
// const state2 = lightMachine.transition(state1, 'CLICK')
// console.log(state2)
// const state3 = lightMachine.transition(state2, 'CLICK')
// console.log(state3)

const service = interpret(lightMachine);

//啟動
