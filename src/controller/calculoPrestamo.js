export const calcularPrestamo = (tcea, meses) => {
    let monto = Number(document.querySelector('#monto').value);
    const pagoMensual = document.querySelector('#pago-mensual');
    const interes = monto * (tcea/100) 
    const montoTotalAPagar = monto + interes 
    const cuota = Number((montoTotalAPagar/meses).toFixed(2));
    pagoMensual.innerHTML = cuota;
    document.querySelector('#prestamo').innerHTML = monto; 
    document.querySelector('#interes').innerHTML = interes; 
    document.querySelector('#total-a-pagar').innerHTML = montoTotalAPagar; 
    return {
        monto: monto,
        pagoMensual : cuota,
        interes: interes,
        montoTotal: montoTotalAPagar
    }
}

export const arrayBancos = [
    { name: 'PRESTAMYPE', img: '', tcea: 12 },
    { name: 'BCP', img: '', tcea: 20 },
    { name: 'CAJA AREQUIPA', img: '', tcea: 25 },
    { name: 'CAJA HUANCAYO', img: '', tcea: 20 }
]; 

export const calcularPrestamoBanco = (monto, tcea, meses) => {
    const interes = monto * (tcea/100) 
    const montoTotalAPagar = monto + interes 
    const cuota = Number((montoTotalAPagar/meses).toFixed(2));

    return {
        monto: monto,
        pagoMensual : cuota,
        interes: interes,
        montoTotal: montoTotalAPagar
    }
}; 