function hacer_click(){
  var inp = document.getElementById('text').value;
  var sel = document.getElementById('seleccion');
  var opt = document.createElement('option');
  opt.appendChild( document.createTextNode(inp));
  opt.value = 'value';
  sel.appendChild(opt);
}
