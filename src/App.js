import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  onComponentInit()
  {
    window.parent.postMessage('A');
  }
  
  onBeforeCall()
  {
    window.parent.postMessage('B');
  }
  
  onDataProcessed()
  {
    window.parent.postMessage('C');
  }
  
  onAfterCall()
  {
    window.parent.postMessage('D');
  }
  
  onComponentDestruct()
  {
    window.parent.postMessage('E');
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
