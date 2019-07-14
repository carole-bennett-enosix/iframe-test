import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          <button name="test1">onComponentInit</button>&nbsp;
          <button name="test2">onBeforeCall</button>&nbsp;
          <button name="test3">onDataProcessed</button>&nbsp;
          <button name="test4">onAfterCall</button>&nbsp;
          <button name="test5">onComponentDestruct</button> &nbsp; 
        </p>
    </div>
  );
}

export default App;
