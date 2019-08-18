import React, { useState, useEffect, MouseEvent } from 'react';
import { Button } from '@material-ui/core';
import { take, isResponseOk } from './core';

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function SomeComponent() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [data, setData] = useState<Data>({} as Data);

  const handleClick = (event: any) => {
    console.log('click event', event);
  };

  const handleHover = (event: MouseEvent) => {
    if (event.target) {
      setPos({ ...pos, x: event.clientX, y: event.clientY });
    }
  };

  useEffect(() => {
    take<Data>('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      if (isResponseOk(response)) {
        setData(response);
      } else {
        console.error('error response', response);
      }
    });
  }, []);

  // useEffect(() => console.info(data), [data]);

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <div onClick={handleClick} onMouseMove={handleHover} role="presentation">
        <h3>Mouse move watching</h3>
        <p>
          x: {pos.x}, y: {pos.y}
        </p>
      </div>
      <hr />
      <div>
        <h3>Counter</h3>
        <p className="count-viewer">{count}</p>
        <Button color="primary" variant="contained" onClick={increment} style={{ marginRight: 10 }}>
          +
        </Button>
        <Button color="secondary" variant="contained" onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  );
}
