import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice";
import { RootState } from "../../store.ts";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="number"
          onChange={(e) => setIncrementAmount(e.target.value)}
        ></input>

        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
