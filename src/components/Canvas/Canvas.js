import React, { Component } from 'react';
import './Canvas.css';

// Importa todas as bibliotecas WebGL:
// TODO: criar um agregador de bibliotecas!
import Utils from '../../webgl-libs/Utils.js';
import Program from '../../webgl-libs/Program.js';

export var GL;
export var PROGRAM;

export default class Canvas extends Component {

  componentDidMount() {
    let canvas = Utils.getCanvas(this.props.id);
    GL = Utils.getGLContext(canvas);

    let vs = Utils.getShader(this.props.vshader, 'vshader');
    let fs = Utils.getShader(this.props.fshader, 'fshader');
    PROGRAM = Program.startProgram(vs, fs);
    
    const vertices = [
      -0.5, 0.5, 0,
      -0.5, -0.5, 0,
      0.5, -0.5, 0,
      0.5, 0.5, 0
    ];
    let squareVAO;
    // Indices defined in counter-clockwise order
    let indices = [0, 1, 2, 0, 2, 3];

    squareVAO = GL.createVertexArray();

    GL.bindVertexArray(squareVAO);

    const squareVertexBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, squareVertexBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertices), GL.STATIC_DRAW);

    // Provide instructions for VAO to use data later in draw
    GL.enableVertexAttribArray(PROGRAM.aVertexPosition);
    GL.vertexAttribPointer(PROGRAM.aVertexPosition, 3, GL.FLOAT, false, 0, 0);

    // Setting up the IBO
    let squareIndexBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, squareIndexBuffer);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), GL.STATIC_DRAW);

    // Clean
    GL.bindVertexArray(null);
    GL.bindBuffer(GL.ARRAY_BUFFER, null);
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, null);

    GL.bindVertexArray(squareVAO);

    this.draw();

    console.log(PROGRAM);
    console.log(GL);

  }

  draw(){ 
    GL.drawElements(GL.TRIANGLE_STRIP, 6, GL.UNSIGNED_SHORT, 0);
  }

  static defaultProps = {
    id: 'webgl-canvas',
    vshader: 'def_vert',
    fshader: 'def_frag'
  }

  render() {

    return (
      <canvas {...this.props}>
        Seu navegador não possuí compatibilidade com o elemento Canvas do HTML 5.
      </canvas>
    )
  }

}
