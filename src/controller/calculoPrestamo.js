export const calcularPrestamo = (meses) => {
    let monto = document.querySelector('#monto');
    const pagoMensual = document.querySelector('#pago-mensual');
    const interes = Number(monto.value) * (meses/100) 
    const montoTotalAPagar = Number(monto.value) + interes 
    const cuota = montoTotalAPagar/meses;
    pagoMensual.innerHTML = cuota.toFixed(2);
    document.querySelector('#prestamo').innerHTML = monto.value; 
    document.querySelector('#interes').innerHTML = interes; 
    document.querySelector('#total-a-pagar').innerHTML = montoTotalAPagar; 
}


    

   
     

