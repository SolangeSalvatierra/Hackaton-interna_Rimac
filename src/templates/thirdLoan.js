import { arrayBancos, calcularPrestamoBanco } from "../controller/calculoPrestamo.js";
import { fourthLoad } from "./fourthLoan.js";

export const comparo = () => {
    const template = `
    <div class="row" id="botones">
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
         <div class="col=text-center"> <p> Recibe tu préstamo </p> </div>
        </div>
    </div>
    <h2>Filtrar</h2>
        <div class="filtrado">
            <p>BUSQUEDA</p>
            <i class="fas fa-search"></i><input type="search"placeholder="ENTIDAD">
        </div>
        <div class="filtrado">
            <p class="titulo">MONTO</p>
            <div class="btn-input">
                <button type="button" id="btn-restar">-</button>
                <input type="number" id="monto" min="1000" value="10000">
                <button type="button" id="btn-sumar">+</button>
            </div>
        </div>
        <div class="filtrado">
            <p class="titulo">TIEMPO</p>
            <select name="select" id="select-tiempo">
                <option value="value1">12 meses</option> 
                <option value="value2">24 meses</option>
                <option value="value3">36 meses</option>
                <option value="value4">4 años</option>
                <option value="value5">5 años</option>
            </select>
        </div>
        <div class="row" id="mostrar-bancos"></div>
    `; 
    const div = document.createElement('section');
    div.setAttribute('id', 'tercera-pagina')
    div.innerHTML = template; 

    const btnSumar = div.querySelector('#btn-sumar');
    const btnRestar = div.querySelector('#btn-restar'); 

    const mostrarBancos = div.querySelector('#mostrar-bancos')

    btnSumar.addEventListener('click', () => {
        monto.value = Number(monto.value) + 1000; 
        mostrarSelect()
    });
    btnRestar.addEventListener('click', () => {
        monto.value = Number(monto.value) - 1000; 
        mostrarSelect()
    });

    const selectTiempo = div.querySelector('#select-tiempo'); 

    const mostrarSelect = () => {
        if (selectTiempo.selectedIndex === 0) {
            mostrarBancos.innerHTML = ''; 
            return arrayBancos.forEach(obj => { 
                const objCalculo = calcularPrestamoBanco(Number(monto.value), obj.tcea, 12)
                console.log(objCalculo);
                mostrarBancos.appendChild(mostrarCalculoBancos(obj, objCalculo))
            })     
        } else if (selectTiempo.selectedIndex === 1) {
            mostrarBancos.innerHTML = '';
            return arrayBancos.forEach(obj => { 
                const objCalculo = calcularPrestamoBanco(Number(monto.value), obj.tcea, 24)
                console.log(objCalculo);;
                mostrarBancos.appendChild(mostrarCalculoBancos(obj, objCalculo))
            })
        } else if (selectTiempo.selectedIndex === 2) {
            mostrarBancos.innerHTML = '';
            return arrayBancos.forEach(obj => {
                const objCalculo = calcularPrestamoBanco(Number(monto.value), obj.tcea, 36)
                console.log(objCalculo);
                mostrarBancos.appendChild(mostrarCalculoBancos(obj, objCalculo))
            })
        } else if (selectTiempo.selectedIndex === 3) { 
            mostrarBancos.innerHTML = '';
            return arrayBancos.forEach(obj => {
                const objCalculo = calcularPrestamoBanco(Number(monto.value), obj.tcea, 48)
                console.log(objCalculo);
                mostrarBancos.appendChild(mostrarCalculoBancos(obj, objCalculo))
            })
        }else {
            mostrarBancos.innerHTML = '';
            return arrayBancos.forEach(obj => {
                const objCalculo = calcularPrestamoBanco(Number(monto.value), obj.tcea, 60)
                console.log(objCalculo);
                mostrarBancos.appendChild(mostrarCalculoBancos(obj, objCalculo))
            })
        }
      };
    
    selectTiempo.addEventListener('change', mostrarSelect);
  
    return div
}



export const mostrarCalculoBancos = (objBanco, obj) => {
    const template = `
        <p>${objBanco.name}</p>
        <img src="" alt="">
        <p>TIENE UN PRESTAMO DE:</p>
        <span>${obj.monto}</span>
        <span>TCEA: ${objBanco.tcea}%</span>
        <p>¿CUANTO VOY A PAGAR?</p>
        <span>${obj.pagoMensual}</span>
        <p>INTERESES</p>
        <span>${obj.interes}</span>
        <p>MONTO TOTAL</p>
        <span>${obj.montoTotal}</span>
        <button id="btn-pide-prestamo">PIDE UN PRESTAMO</button>
    `; 
    const div = document.createElement('div');
    div.setAttribute('class', 'col')
    div.innerHTML = template; 

    const btnPidePrestamo = div.querySelector('#btn-pide-prestamo')

    btnPidePrestamo.addEventListener('click', () => {
        const terceraPagina = document.getElementById('tercera-pagina')
        terceraPagina.innerHTML = ''; 
        terceraPagina.appendChild(fourthLoad(objBanco, obj));
    })
  
    return div
}