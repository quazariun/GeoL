export function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

export function transformMNT(file) {
  let obj = new Object();
  obj.index = new Array();

  fetch(file)
    .then(response => response.text())
    .then(data => {
      let result = data.split('\n');

      result.forEach((element, index) => {
        result[index] = element.split(';');
      });


      for (let x = 0; x < result.length; x++) {
        for (let y = 0; y < result[x].length; y++) {
          obj.index.push(x);
          obj.index.push(parseInt(result[x][y]) / 10);
          obj.index.push(y);

        }
      }

      let string = JSON.stringify(obj);

      download(string, 'json.txt', 'text/plain');

      console.log(JSON.parse(string));
    });


}
export function texture(file) {
  let obj = new Object();
  obj.colors = new Array();

  fetch(file)
  .then(response => response.text())
  .then(data => { 
    let textura = data.split('\n');

    textura.forEach((element,index) => { 
      textura[index] = element.split(';');
    });

    textura.forEach((element,index) => { 
      element.forEach((el, ind) => {
        let vec = el.split('_');
        vec = parseInt(vec);
        vec = vec/255;
        obj.colors.push(vec);
      });
    });

    let string = JSON.stringify(obj);

    download(string, 'texture.json', 'text/plain');
    console.log(JSON.parse(string));
  });
}

export function mnt_index(file) {
  
  let obj = new Object();
  obj.vertices = new Array();
  obj.indices = new Array();

  fetch(file)
    .then(response => response.text())
    .then(data => {
      let result = data.split('\n');

      result.forEach((element, vertices) => {
        result[vertices] = element.split(';');
      });

      for (let x = 0; x < result.length; x++) {
        for (let y = 0; y < result[x].length; y++) {
          obj.vertices.push(x-(result.length/2));
          obj.vertices.push(parseInt(result[x][y])/10);
          obj.vertices.push(y-(result[x].length/2));
        }
      }
      let l1,l2;

      for (let j = 0; j < result.length-1; j++) {
        l1 = result[j].length*j;
        l2 = l1+result[j].length;

        for(let k = 0; k < result[j].length; k++){
          obj.indices.push(l1);
          obj.indices.push(l2);

          l1++;
          l2++;
        }
      }
      
      let string = JSON.stringify(obj);

      download(string, 'mnt.json', 'text/plain');

      console.log(JSON.parse(string));
    });


}

function normalizar(valor,maior,menor){
  return (valor-menor)/(maior-menor);
}

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
