import React, { Component, useState, useEffect } from 'react';
import './Canvas.css';


export default class Canvas extends Component {
  
  constructor(props) {
    super(props);

    //expandFullScreen();
    // Resize screen when the browser has triggered the resize event
    //window.addEventListener('resize', expandFullScreen);
  };

  // useEffect(() => {
  //   document.title = `You clicked`;
  // })

  expandFullScreen() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }


  render() {
    const {
      props: {
        shader,
        context
      },
      state: {
        teste
      },
      expandFullScreen,
    } = this;

    return(
      <canvas>
        Seu navegador não possuí compatibilidade com o elemento Canvas do HTML 5. 
      </canvas>
    )
  }
}
