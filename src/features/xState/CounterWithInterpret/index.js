import React, { useState } from "react";
import { useInterpret, useSelector, useActor } from "@xstate/react";
import counterMachine from "../Counter/counterMachine";
import cx from "classnames";
import styles from "../Counter/counter.module.scss";

function CounterWithInterpret() {
  //使用useInterpret取代先前的useMachine, 取得靜態service
  const service = useInterpret(counterMachine);

  //使用useActor, 透過service取得state, send
  const [state, send] = useActor(service);

  //使用useSelector, 透過service取得context
  const selectCount = (state) => state.context.count;
  const count = useSelector(service, selectCount);

  const [value, setValue] = useState("0");

  return (
    <div className={styles.container}>
      <div className={styles.result}>{count}</div>
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

export default CounterWithInterpret;
