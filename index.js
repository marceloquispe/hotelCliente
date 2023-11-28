$(document).ready(function () {
  $('#registrarseForm').submit(function (e) {
    e.preventDefault();
    const nombre = $('#nombreR').val();
    const correo = $('#correoR').val();
    const password = $('#passwordR').val();
    $('#registrarseModal').modal('hide');
    alert(
      `Nombre: "${nombre}", Correo: "${correo}"
Usuario registrado correctamente!`
    );
  });
});

$(document).ready(function () {
  $('#inicioForm').submit(function (e) {
    e.preventDefault();
    const correo = $('#correo').val();
    const password = $('#password').val();
    $('#inicioModal').modal('hide');
    alert(`Inicio de sesion correcto!`);
  });
});
