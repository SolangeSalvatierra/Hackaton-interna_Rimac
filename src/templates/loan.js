import { calcularPrestamo } from '../controller/calculoPrestamo.js';
import { comparo } from './thirdLoan.js';

export const loan = () => {
  const template = `
  <section class="text-center">
    <h3 class="my-3"> <strong> HOLA EMPRENDEDORA </h3>
    <h4>Te otorgamos un préstamo para que sigas creciendo </h4>

    <div class="container-fluid" id="botones">
        <div class="col">
        <div class="boton"> <a href="#"> 1 </a> </div>
        <div class="col= text-center">  <p> Calcula tu prestamo </p> </div>
        </div>
        <div class="col">
        <div class="boton"> <a href="#"> 2 </a> </div>
        <div class="col= text-center"> <p> Ingresa tus datos </p> </div>
        </div>
        <div class="col">
        <div class="boton"> <a href="#"> 3 </a> </div>
        <div class="col= text-center"> <p> Compara Préstamos </p> </div>
        </div>
        <div class="col">
        <div class="boton"> <a href="#"> 4 </a> </div>
        <div class="col= text-center"> <p> Solicita tu préstamo </p> </div>
        </div>
        <div class="col">
        <div class="boton"> <a href="#"> 5 </a> </div>
         <div class="col= text-center"> <p> Recibe tu préstamo </p> </div>
        </div>
    </div>

    <h3>Calcula tu préstamo</h3>
        <div class="info">
            <p class="titulo">¿Cuanto dinero necesitas?</p>
            <div class="btn-input">
                <button type="button" id="btn-restar">-</button>
                <input type="number" id="monto" min="1000" value="10000">
                <button type="button" id="btn-sumar">+</button>
            </div>
        </div>
        <div class="info">
            <p class="titulo">¿Cuanto tiempo?</p>
            <select name="select" id="select-tiempo">
                <option value="value1">12 meses</option> 
                <option value="value2">24 meses</option>
                <option value="value3">36 meses</option>
                <option value="value4">4 años</option>
                <option value="value5">5 años</option>
            </select>
        </div>
        <div class="info">
            <p class="titulo">Debo pagar</p>
            <span><span id="pago-mensual"></span> mensuales</span>
        </div>
        <div class="info">
            <p class="titulo">Resumen de Pago</p>
            <div>
                <span>Prestamo</span>
                <span id="prestamo"></span>
                <span>Intereses</span>
                <span id="interes"></span>
                <span>Total a pagar</span>
                <span id="total-a-pagar"></span>
            </div>
        </div>
    <button id="btn-solicitar">Solicitar</button>
    </section>
    `; 
  const div = document.createElement('div');
  div.innerHTML = template; 

  const btnSumar = div.querySelector('#btn-sumar');
  const btnRestar = div.querySelector('#btn-restar'); 

  btnSumar.addEventListener('click', () => {
    monto.value = Number(monto.value) + 1000; 
    menShowIndicator();
  });
  btnRestar.addEventListener('click', () => {
    monto.value = Number(monto.value) - 1000; 
    menShowIndicator();
  });

  const selectTiempo = div.querySelector('#select-tiempo'); 

  const menShowIndicator = () => {
    if (selectTiempo.selectedIndex === 0) {
      calcularPrestamo(12);
    } else if (selectTiempo.selectedIndex === 1) {
      calcularPrestamo(24);
    } else if (selectTiempo.selectedIndex === 2) {
      calcularPrestamo(36); 
    } else if (selectTiempo.selectedIndex === 3) {
      calcularPrestamo(48); 
    } else {
      calcularPrestamo(60);
    }
  };
  selectTiempo.addEventListener('click', menShowIndicator);

  const btnSolicitar = div.querySelector('#btn-solicitar');

  btnSolicitar.addEventListener('click', () => {
    div.innerHTML = '';
    div.appendChild(comparo());
  });

  return div;
}; 