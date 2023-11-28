let orden = 1;

function seleccionar(element) {
  element.classList.toggle('table-danger');
}

$('#formulario-reserva').submit(function (e) {
  e.preventDefault();
  const cantidad = $('#cantidad-reserva').val();
  const desde = $('#desde-reserva').val();
  const hasta = $('#hasta-reserva').val();
  const tipo = $('#tipo-reserva').val();
  const nombre = $('#nombre-reserva').val();

  orden++;

  $('tbody').append(`
    <tr onclick="seleccionar(this)">
      <th scope="row">${orden}</th>
      <td>${nombre}</td>
      <td>${cantidad}</td>
      <td>${tipo}</td>
      <td>${desde}</td>
      <td>${hasta}</td>
    </tr>
  `);
});

$('#eliminar-todo').click(function (e) {
  $('tbody').html('');
  orden = 0;
});

function volverAEnumerar() {
  $('tbody tr th:first-child').each(function (i) {
    $(this).html(i + 1);
    orden = i + 1;
  });
}

$('#eliminar-seleccionados').click(function (e) {
  $('.table-danger').remove();
  volverAEnumerar();
});
