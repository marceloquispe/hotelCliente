let contador = 0;

function seleccionar(element) {
  element.classList.toggle("table-primary");
}

$("#formulario-reserva").submit(function (e) {
  e.preventDefault();
  contador++;
  const cantidad = Number($("#cantidad").val());
  const tipo = $('#tipo').val();

  costo = 0;

  switch (tipo) {
    case 'Simple':
      costo = cantidad * 70;
      break;
    case 'Doble':
      costo = cantidad * 60;
      break;
    case 'Triple':
      costo = cantidad * 50;
      break;
  }

  $("tbody").append(`
  <tr onclick="seleccionar(this)">
    <th>${contador}</th>
    <td>${tipo}</td>
    <td>${cantidad}</td>
    <td>${costo}</td>
  </tr>
  `);
  $('#span1').html(contador);
  alert("Reserva agregada al carrito");

});

function elminarSeleccion() {
  $('.table-primary').remove();
  contador = 0;
  $('#span1').html(contador);
}

$(".img-fluid").hover(
  function () {
    $(this).animate(
      {
        scale:(1, 1.1),
      },
      800
    )
  }, function () {
    $(this).animate(
      {
        scale:'1',
      },
      800
    )
  }
);