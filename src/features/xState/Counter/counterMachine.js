import { createMachine, assign } from "xstate";
const counterMachine = createMachine(
  {
    id: "counter",
    initial: "ENABLED",
    context: {
      count: 0,
    },
    states: {
      ENABLED: {
        on: {
          INC: {
            actions: ["increment"],
          },
          DYNAMIC_INC: {
            actions: ["dynamic_increment"],
          },
          RESET: {
            actions: ["reset"],
          },
          DISABLE: "DISABLED",
        },
      },
      DISABLED: {
        on: {
          ENABLE: "ENABLED",
        },
      },
    },
  },
  {
    actions: {
      increment: assign({
        count: (context) => context.count + 1,
      }),
      dynamic_increment: assign({
        count: (context, event) => context.count + (event.value || 0),
      }),
      reset: assign({
        count: 0,
      }),
    },
  }
);

export default counterMachine;
