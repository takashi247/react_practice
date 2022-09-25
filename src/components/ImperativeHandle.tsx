import React, { useState, useRef, useImperativeHandle } from 'react';

const Child = React.forwardRef((prop, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  // set value to be referred by parent's ref using useImperativeHandle
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date();
      const message = `Hello, it's ${date.toLocaleDateString()} now`;
      setMessage(message);
    },
  }));

  return <div>{message !== null ? <p>{message}</p> : null}</div>;
})

export const Parent5 = () => {
  const childRef = useRef<{ showMessage: () => void } | null>(null);
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage();
    }
  };

  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  );
};