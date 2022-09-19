import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Count from './components/StateSample';
import Count2 from './components/ReducerSample';
import Parent2 from './components/Parent';
import Parent3 from './components/UseCallbackSample';
import { UseMemoSample } from './components/UseMemoSample';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   {/* replace App with Hello */}
  //   <Hello />
  //   <Name />
  //   <Message />
  //   <Parent />
  //   <Page />
  //   <Count initialValue={0} />
  //   <Count2 initialValue={0} />
  // <Parent2 />,
  // <Parent3 />,
  <UseMemoSample />,
  // </React.StrictMode>,
  document.getElementById('root')
);

/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
