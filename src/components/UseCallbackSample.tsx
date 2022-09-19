import React, { useState, useCallback } from 'react';

type ButtonProps = {
  buttonName: string;
  onClick: () => void;
};

const ClickButton = React.memo((props: ButtonProps) => {
  const { buttonName, onClick } = props;
  console.log(`${buttonName} is redrawn`);
  return <button onClick={onClick}>{buttonName}</button>;
});

const Parent3 = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const increment = () => {
    setCount((c) => c + 1);
  };
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);
  return (
    <div>
      <p>Current count: {count}</p>
      <ClickButton buttonName='Decrement' onClick={decrement} />
      <ClickButton buttonName='Increment' onClick={increment} />
      <ClickButton buttonName='Double' onClick={double} />
    </div>
  )
}

export default Parent3;
