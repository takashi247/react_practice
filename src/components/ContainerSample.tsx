import React from 'react';

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
  return (
    <div style={{ background: 'red' }}>
      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    <Container title="Hello">
    {/* <Container> */}
      <p>This part will be surrounded by background color</p>
    </Container>
  );
};

export default Parent;