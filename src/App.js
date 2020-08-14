import React, { useReducer } from 'react';
import Button from './components/Button';

function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  };
}

function Counter() {
  const [{ count }, dispatch] = useReducer(counterReducer, { count: 0 });
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  return (
    <div>
      Count: {count}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}



function App() {
  
  return (
    <div>
      <Counter />
      <Button label="BOTAO SEM CONTEXTO" />
      <div style={{
        position: 'relative',
      }}>
        <i
          style={{
            position: 'absolute',
            top: 20,
            left: 4,
            height: 20,
            width: 20,
          }}
          className="fa fas-iconx"
        >X</i>
        <input style={{ paddingLeft: 28, height: 40 }}/>
      </div>
    </div>
  );
}

export default App;
