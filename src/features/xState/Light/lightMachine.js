import { createMachine } from "xstate";

export const LIGHT_STATES = {
  RED: "RED",
  GREEN: "GREEN",
  YELLOW: "YELLOW",
};

export const LIGHT_EVENTS = {
  CLICK: "CLICK",
};

const lightMachine = createMachine({
  id: "light",
  initial: LIGHT_STATES.RED,
  states: {
    [LIGHT_STATES.RED]: {
      on: {
        [LIGHT_EVENTS.CLICK]: LIGHT_STATES.GREEN,
      },
    },
    [LIGHT_STATES.GREEN]: {
      on: {
        [LIGHT_EVENTS.CLICK]: LIGHT_STATES.YELLOW,
      },
    },
    [LIGHT_STATES.YELLOW]: {
      on: {
        [LIGHT_EVENTS.CLICK]: LIGHT_STATES.RED,
      },
    },
  },
});
export default lightMachine;
// const state0 = lightMachine.initialState;
// console.log(state0);
// const state1 = lightMachine.transition(state0, 'CLICK')
// console.log(state1);
// const state2 = lightMachine.transition(state1, 'CLICK')
// console.log(state2)
// const state3 = lightMachine.transition(state2, 'CLICK')
// console.log(state3)

// const service = interpret(lightMachine);

// //啟動
// service.state();

// //Send events
// service.send("CLICK");

// //停止service
// service.stop();
