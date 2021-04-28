import React, { Component } from 'react';
import './App.css';

// Componentes
import Canvas from './components/Canvas/Canvas.js'

class teste extends Component {
  constructor(props){
    super(props);
  }

  print_teste() {
    console.log("teste");
  }

  render(){
   
   const {
     props: {
       shader,
       context
     },
     print_teste,
   } = this;

   print_teste();

    return(
      <div className="App">
        <Canvas />
      </div>
    );
    
  }
}


function App() {

  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

export default App;
