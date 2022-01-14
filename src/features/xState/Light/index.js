import { useMachine } from "@xstate/react";
import lightMachine, { LIGHT_STATES, LIGHT_EVENTS } from "./lightMachine";
import cx from "classnames";
import styles from "./light.module.scss";

const Light = () => {
  const [light, sendLight] = useMachine(lightMachine);
  const clickHandler = () => {
    sendLight(LIGHT_EVENTS.CLICK);
  };

  return (
    <div className={styles.container}>
      <div className={styles.light}>
        {light.matches(LIGHT_STATES.RED) && <div className={cx(styles.red)} />}
        {light.matches(LIGHT_STATES.GREEN) && (
          <div className={cx(styles.green)} />
        )}
        {light.matches(LIGHT_STATES.YELLOW) && (
          <div className={cx(styles.yellow)} />
        )}
        <button onClick={clickHandler}>click</button>
      </div>
    </div>
  );
};

export default Light;
