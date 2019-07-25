import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  onComponentInit()
  {
    window.parent.postMessage('A','*');
    this.createEventListener();
  }
  
  onBeforeCall()
  {
    window.parent.postMessage('B', '*');
    this.createEventListener();
  }
  
  onDataProcessed()
  {
    window.parent.postMessage('C','*');
    this.createEventListener();
  }
  
  onAfterCall()
  {
    window.parent.postMessage('D','*');
    this.createEventListener();
  }
  
  onComponentDestruct()
  {
    window.parent.postMessage('E','*');
    this.createEventListener();
  }

  createEventListener()
  {
    window.addEventListener("message", 
        function(event){
          this.alert(event.data);
        }
      )
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
