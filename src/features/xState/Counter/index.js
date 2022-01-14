import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import counterMachine from "./counterMachine";
import cx from "classnames";
import styles from "./counter.module.scss";

function Counter() {
  const [state, send] = useMachine(counterMachine);
  const [value, setValue] = useState("0");
  return (
    <div className={styles.container}>
      <div className={styles.result}>{state.context.count}</div>
      <button
        className={styles.increment}
        onClick={() => {
          send({ type: "INC" });
        }}
      >
        +1
      </button>
      <div className={cx(styles.increment, styles.dyna)}>+</div>
      <input
        className={styles.inputbox}
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        className={styles.add_dyna}
        onClick={() => {
          send({ type: "DYNAMIC_INC", value: Number(value) });
        }}
      >
        add
      </button>
      <button
        className={styles.switcher}
        onClick={() => {
          if (state.matches("DISABLED")) {
            send({ type: "ENABLE" });
          }
          if (state.matches("ENABLED")) {
            send({ type: "DISABLE" });
          }
        }}
      >
        {state.matches("ENABLED") && "Disable"}
        {state.matches("DISABLED") && "Enable"}
      </button>
    </div>
  );
}

export default Counter;
