import React, { useState, useEffect } from 'react';
import { Incrementor, Counter } from './components/ClickCounter';

function CounterApp() {
  const [increment, setIncrement] = useState(5);
  const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + increment);
	};

  useEffect(() => {
    console.log('O titulo será atualizado porque o incremento mudou!');
  }, [increment]);
  useEffect(() => {
    document.title = `Incremento: ${increment}`;
  });
  return (
    <div>
      <Incrementor increment={increment} increaseIncrement={() => {
        setIncrement(increment + 1);
      }} />
      {count <= 25 ? (
        <Counter count={count} incrementCount={incrementCount} />
      ) : null}
    </div>
  );
}

export default CounterApp;
