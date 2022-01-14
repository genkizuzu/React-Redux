import CounterWithInterpret from "./CounterWithInterpret";
import Counter from "./Counter";
import Light from "./Light";

const XState = () => {
  return (
    <>
      <Light />
      <Counter />
      <CounterWithInterpret />
    </>
  );
};

export default XState;
