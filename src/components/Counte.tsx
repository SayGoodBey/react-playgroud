import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface RootState {
  count: {
    value: number;
  };
}

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count.value);

  const increment = () => {
    dispatch({ type: 'count/increment' });
  };

  const decrement = () => {
    dispatch({ type: 'count/decrement' });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
