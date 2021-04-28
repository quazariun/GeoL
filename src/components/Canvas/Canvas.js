import React, { Component } from 'react';
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

  componentDidMount() {
    this.expandFullScreen();
    window.addEventListener('resize', this.expandFullScreen);
  }

  componentDidUpdate() {
  }

  static defaultProps = { 

  }

  render() {
    
    const {
      props: {
        width,
        height,
        shader,
        context
      },
      expandFullScreen,
    } = this;

    return(
      <canvas { ...this.props }>
        Seu navegador não possuí compatibilidade com o elemento Canvas do HTML 5. 
      </canvas>
    )
  }

}
