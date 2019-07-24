import React from 'react';
import './App.css';

function App() {

  function onComponentInit()
  {
    window.postMessage('A');
  }

  function onBeforeCall()
  {
    window.postMessage('B');
  }

  function onDataProcessed()
  {
    window.postMessage('C');
  }

  function onAfterCall()
  {
    window.postMessage('D');
  }

  function onComponentDestruct()
  {
    window.postMessage('E');
  }

  return (
    <div className="App">
        <p>
          <button name="test1" onClick={onComponentInit()}>onComponentInit</button>&nbsp;
          <button name="test2" onClick={onBeforeCall()}>onBeforeCall</button>&nbsp;
          <button name="test3"onClick={onDataProcessed()}>onDataProcessed</button>&nbsp;
          <button name="test4" onClick={onAfterCall()}>onAfterCall</button>&nbsp;
          <button name="test5"onClick={onComponentDestruct()}>onComponentDestruct</button> &nbsp; 
        </p>
    </div>
  );
}

export default App;
