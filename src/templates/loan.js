import { calcularPrestamo } from "../controller/calculoPrestamo.js";
import { comparo } from "./thirdLoan.js";

export const loan = () => {
    const template = `
    <section>
    <h1>HOLA EMPRENDEDORA</h1>
    <h3>Te otorgamos un préstamo para que sigas creciendo</h3>
    <div>
        <span class="numero">1</span>
        <span>Calcula tu prestamo</span>
    </div>
    <div>
        <span class="numero">2</span>
        <span>Ingresa tus datos</span>
    </div>
    <div>
        <span class="numero">3</span>
        <span>Compara Préstamos</span>
    </div>
    <div>
        <span class="numero">4</span>
        <span>Solicita tu préstamo</span>
    </div>
    <div>
        <span class="numero">5</span>
        <span>Recibe tu préstamo</span>
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
        menShowIndicator()
    });
    btnRestar.addEventListener('click', () => {
        monto.value = Number(monto.value) - 1000; 
        menShowIndicator()
    });

    const selectTiempo = div.querySelector('#select-tiempo'); 

    const menShowIndicator = () => {
        if (selectTiempo.selectedIndex === 0) {
            calcularPrestamo(12)
        } else if (selectTiempo.selectedIndex === 1) {
            calcularPrestamo(24)
        } else if (selectTiempo.selectedIndex === 2) {
            calcularPrestamo(36) 
        } else if (selectTiempo.selectedIndex === 3) {
            calcularPrestamo(48) 
        }else {
            calcularPrestamo(60)
        }
      };
    selectTiempo.addEventListener('click', menShowIndicator);

    const btnSolicitar = div.querySelector('#btn-solicitar')

    btnSolicitar.addEventListener('click', () => {
        div.innerHTML='';
        div.appendChild(comparo())
    })

    return div
}; 