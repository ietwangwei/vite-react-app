import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from 'stores/countStore';

import './index.scss';

const Count = () => {
  const [count, setCount] = useRecoilState(countState);

  const handleAddCount = () => setCount(count + 1);

  const handleDecreaseCount = () => setCount(count - 1);

  return (
    <div className="count">
      <p>Count: {count}</p>
      <div className="count-button-group">
        <button type="button" onClick={handleAddCount}>
          ++
        </button>
        <button type="button" onClick={handleDecreaseCount}>
          --
        </button>
      </div>
    </div>
  );
};

export default Count;
