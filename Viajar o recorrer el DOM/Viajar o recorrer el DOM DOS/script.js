function agregarElemento() {
    var nuevoElementoInput = document.getElementById('nuevoElemento');
    var nuevoElementoValor = nuevoElementoInput.value.trim();
  
    if (nuevoElementoValor !== "") {
      var lista = document.getElementById('lista');
  
    
      var nuevoElementoLi = document.createElement('li');
      nuevoElementoLi.className = 'list-group-item';
      nuevoElementoLi.appendChild(document.createTextNode(nuevoElementoValor));
  
     
      lista.appendChild(nuevoElementoLi);
  
      
      nuevoElementoInput.value = "";
    }
  }
  