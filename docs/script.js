function mostrarMensaje() {
  alert("Gracias por tu interés. Pronto te contactaremos con una cotización.");
}

function mostrarFormulario() {
  document.getElementById("formularioCotizacion").style.display = "block";
}

document.getElementById("cotizacionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias! Tu solicitud ha sido enviada.");
  // Aquí podrías enviar los datos a tu servidor con fetch() o AJAX

  // Ocultar el formulario
 // document.getElementById("formularioCotizacion").style.display = "none";

  // Limpiar los campos
  document.getElementById("cotizacionForm").reset();
  // recarga la pagina
  location.reload();

});


