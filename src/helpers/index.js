const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(valor);
};

const calcularTotalPagar = (cantidad, plazos) => {
  let total;

  //Calculo del interes por cantidad (a mayor prestamo -> menor interés)
  if (cantidad < 5000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  //Calculo del interés por plazos (a mayor plazos -> mayor interés)
  if (plazos === 6) {
    total *= 1.1;
  } else if (plazos === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
};

export { formatearDinero, calcularTotalPagar };