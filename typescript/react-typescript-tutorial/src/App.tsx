import React from 'react';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
