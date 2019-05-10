import { calcularPrestamo } from '../controller/calculoPrestamo.js';
import { secondLoad } from './second-load.js';

export const loan = () => {
  const template = `
    <section class="text-center">
    <h3 class="my-5"> <strong> HOLA EMPRENDEDORA </h3>
    <h4>Te otorgamos un préstamo para que sigas creciendo </h4>
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
    <p class="h3 text-left my-5" > Calcula tu préstamo </p>
    
    <div class="row">
        <div class="col-3">
            <label class="my-4"> ¿Cuanto dinero necesitas? </label>
            <div class="col-">
                <button class="col-2 btn btn-warning" type="button" id="btn-restar"> - </button>
                <input class="col-5" type="text" id="monto" min="1000" value="10000">
                <button class="col-2 btn btn-warning" type="button" id="btn-sumar"> + </button>
            </div>
        </div>
    
        <div class="col-3">
            <label class="my-4"> ¿Cuanto tiempo? </label>
            <select class="col-5" name="select" id="select-tiempo">
                <option value="value1">12 meses</option> 
                <option value="value2">24 meses</option>
                <option value="value3">36 meses</option>
                <option value="value4">4 años</option>
                <option value="value5">5 años</option>
            </select>
        </div>
        <div class="col-3">
            <label class="my-4" > Debo pagar </label>
            <div> <p class=" h2 col-3 " id="pago-mensual"> </p>  mensuales </div>
        </div>
        
        <div class="col-3">
            <label class="my-4"> Resumen de Pago </label>
            
            <div class="row bg-light rounded text-center">
                <div class="col-">
                    <div class="col-4"> Prestamo </div>
                    <div class="col-4"> Intereses </div>
                    <div class="col-4"> Total a pagar </div>
                </div>
                <div class="col">
                    <div class="col-4" id="prestamo"> </div>
                    <div class="col-4" id="interes"> </div>
                    <div class="col-4"id="total-a-pagar"> </div>
                    <label class="my-4" > Ver cronograma </label>
                    <button class="btn-sm btn-danger" id="btn-solicitar"> Solicitar </button>
                </div>
            </div>
        </div>
        <div class="row"
            <div class="col-8" id="informacion">
            <div class="col-8"> Préstamo basado en TCEA 12% </div>
            <div class="col-8"> IMPORTANTE </div>
            <div class="col-8 row bg-light rounded text-center""> El préstamo será otrogado por la emtidad finaciera elegida.
            Juntas y VisaNet no es responsable de la gestón del crédito. </div>
        </div>
    </section>
    `; 
  const div = document.createElement('div');
  div.innerHTML = template; 

  const btnSumar = div.querySelector('#btn-sumar');
  const btnRestar = div.querySelector('#btn-restar'); 

  btnSumar.addEventListener('click', () => {
    monto.value = Number(monto.value) + 1000; 
    mostrarSelect();
  });
  btnRestar.addEventListener('click', () => {
    monto.value = Number(monto.value) - 1000; 
    mostrarSelect();
  });

  const selectTiempo = div.querySelector('#select-tiempo'); 

  const mostrarSelect = () => {
    if (selectTiempo.selectedIndex === 0) {
      return calcularPrestamo(12, 12);
    } else if (selectTiempo.selectedIndex === 1) {
      return calcularPrestamo(24, 24);
    } else if (selectTiempo.selectedIndex === 2) {
      return calcularPrestamo(36, 36); 
    } else if (selectTiempo.selectedIndex === 3) {
      return calcularPrestamo(48, 48); 
    } else {
      return calcularPrestamo(60, 60);
    }
  };
  selectTiempo.addEventListener('change', mostrarSelect);

  const btnSolicitar = div.querySelector('#btn-solicitar');

  btnSolicitar.addEventListener('click', () => {
    // const infoPresta = mostrarSelect()

    div.innerHTML = '';
    div.appendChild(secondLoad());
    // arrayBancos.forEach(info => {
    //     div.appendChild(mostrarCalculoBancos(info, infoPresta))
    // })
    // div.appendChild(filtrado(infoPresta))
  });

  return div;
}; 