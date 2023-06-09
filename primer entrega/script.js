console.log("hola") 

function validarForm(){
  var nombre = document.getElementById("nombre"); 
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");
  var sueldo = document.getElementById("sueldo");
  var moneda = document.getElementById("moneda");

  if (nombre.value === "") {
    alert("nombre no puede estar vacío");
    return false;
  }
  if (email.value === "") {
    alert("email no puede estar vacío");
    return false; 
  }
  if (mensaje.value.length < 8) {
    alert("mensaje debe tener al menos 8 caracteres");
    return false;
  }
    if (mensaje.value === "") {
      alert("mensaje no puede estar vacío");
      return false; 
  }
  if (sueldo.value === "") {
  alert("sueldo no puede estar vacío");
  return false;
  }
  if (moneda === "ARS" && sueldo < 100000) {
    alert("El sueldo mínimo en pesos argentinos es de 100,000");
    return false;
  }
  else if ((moneda === "USD" || moneda === "EUR") && sueldo < 379.60) {
    alert("El sueldo mínimo en dólares o euros es de 379.60");
    return false;
  }
}
function enviarForm(){
    console.log("enviando formulario...");
    return false;
}

var datos = []; // Variable para almacenar los datos ingresados

function guardarDatos() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var sueldo = document.getElementById("sueldo").value;

  // Objeto que representa los datos ingresados
  var nuevoDato = {
    nombre,
    email,
    mensaje,
    sueldo

  };

  datos.push(nuevoDato); // Agregar nuevo dato a la lista

  mostrarDatos(); // Mostrar los datos en la tabla

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("sueldo").value = "";

  return false; // Evitar el envío del formulario
}

function mostrarDatos() {
  // Ordenar datos alfabéticamente por nombre
  var datosOrdenados = datos.sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre);
  });

  // Ordenar datos por sueldo de mayor a menor
  datosOrdenados.sort(function(a, b) {
    return b.sueldo - a.sueldo;
  });

  var tabla = document.getElementById("tablaDatos");
  var tbody = tabla.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Limpiar contenido existente

  // Recorrer los datos y agregar filas a la tabla
  for (var i = 0; i < datosOrdenados.length; i++) {
    var fila = "<tr><td>" + datosOrdenados[i].nombre + "<td><td>" + datosOrdenados[i].email +"<td><td>" + datosOrdenados[i].mensaje + "</td><td>" + datosOrdenados[i].sueldo + "</td></tr>";
    tbody.innerHTML += fila;
  }
}
