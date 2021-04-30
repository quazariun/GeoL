import { GL } from '../components/Canvas/Canvas.js'

import shaders from '../shaders'

export default class Utils {

  // Procura e retorna o ID do Canvas
  static getCanvas(id) {
    const canvas = document.getElementById(id);

    if (!canvas) {
      console.error(`Não há elemento Canvas com o id: ${id} nesta página.`);
      return null;
    }

    return canvas;
  };

  // Dado um elemento Canvas HTML 5, retorna o contexto WEBGL 2.
  static getGLContext(canvas) {
    return canvas.getContext('webgl2') || console.error('WebGL2 não está disponível neste navegador.');
  };


  // Dado o nome do Shader (referenciado na pasta shaders/index.html) e o tipo, retorna o shader compilado.
  static getShader(name, type) {

    let shader;
    let shaderString = shaders[name];

    type === 'vshader' ? shader = GL.createShader(GL.VERTEX_SHADER) : shader = GL.createShader(GL.FRAGMENT_SHADER);

    GL.shaderSource(shader, shaderString);
    GL.compileShader(shader);

    if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
      console.error(GL.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  };

};
