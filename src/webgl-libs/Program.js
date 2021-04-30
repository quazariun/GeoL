'use strict';

import { GL } from '../components/Canvas/Canvas.js'
import { PROGRAM } from '../components/Canvas/Canvas.js'
// Program constructor that takes a WebGL context and script tag IDs
// to extract vertex and fragment shader source code from the page

export default class Program {

  static startProgram(vs,fs) {
    let PROGRAM = GL.createProgram();

    GL.attachShader(PROGRAM, vs);
    GL.attachShader(PROGRAM, fs);
    GL.linkProgram(PROGRAM);

    if (!GL.getProgramParameter(PROGRAM, GL.LINK_STATUS)) {
      return console.error('Could not initialize shaders.');
    }

    GL.useProgram(PROGRAM);

    return PROGRAM;
  }

}
