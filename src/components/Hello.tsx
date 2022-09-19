// Hello returns text with alert when clicked
const Hello = () => {
  // onClick is a funtion to be called when clicked
  const onClick = () => {
    // make an alert
    alert('hello');
  };

  const text = 'Hello, React';

  // return a div element that has a text as its child
  return (
    // pass a callback function when clicked to div's onClick
    <div onClick={onClick}>
      {text}
    </div>
  )
};

// export the function to load from outside of this file
export default Hello;
