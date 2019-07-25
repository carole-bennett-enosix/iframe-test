import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  onComponentInit()
  {
    window.top.postMessage('A');
  }
  
  onBeforeCall()
  {
    window.top.postMessage('B');
  }
  
  onDataProcessed()
  {
    window.top.postMessage('C');
  }
  
  onAfterCall()
  {
    window.top.postMessage('D');
  }
  
  onComponentDestruct()
  {
    window.top.postMessage('E');
  }

  render(){
  return (
    <div className="App">
        <p>
          <button name="test1" onClick={this.onComponentInit}>onComponentInit</button>&nbsp;
          <button name="test2" onClick={this.onBeforeCall}>onBeforeCall</button>&nbsp;
          <button name="test3"onClick={this.onDataProcessed}>onDataProcessed</button>&nbsp;
          <button name="test4" onClick={this.onAfterCall}>onAfterCall</button>&nbsp;
          <button name="test5"onClick={this.onComponentDestruct}>onComponentDestruct</button> &nbsp; 
        </p>
    </div>
  );
  }

}









export default App;
