import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showTodo: false,
      time: 5
    }
  }

  componentDidMount(){
    this.counter = setInterval(()=>{
      if(this.state.time===0){
        clearInterval(this.counter);
        this.setState({
          showTodo: true
        })
      }else{
        this.setState(prevState => ({time: prevState.time-1}));
      }
      
    },1000);
  }

  render(){
    
    return (
      <div className="App">
        {
          this.state.showTodo? <TodoList/>:  <h1>{this.state.time}</h1>
        }     
        </div>
    );
  }
}

export default App;
