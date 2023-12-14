function agregarElemento() {
    var lista = document.getElementById('lista');
    var nuevoElementoLi = document.createElement('li');
    nuevoElementoLi.className = 'list-group-item';
    nuevoElementoLi.appendChild(document.createTextNode('Elemento ' + (lista.children.length + 1)));
    lista.appendChild(nuevoElementoLi);
  }
  
 
  function eliminarElementos() {
    var lista = document.getElementById('lista');
    var elementosSeleccionados = document.querySelectorAll('.list-group-item.active');
  
    elementosSeleccionados.forEach(function (elemento) {
      lista.removeChild(elemento);
    });
  }
  
  
  document.getElementById('lista').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('active');
    }
  });