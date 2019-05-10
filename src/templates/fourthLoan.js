import { fifthLoad } from "./fifthLoan.js";

export const fourthLoad = (objBanco, obj) => {
    const newSection = document.createElement('SECTION');
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
        <h3>${objBanco.name}</h3>
        <h1>¡Ya falta poco para recibir tu préstamo!</h1>
        <div>
          <label>Cuota</label>
          <label>${obj.pagoMensual}</label>
        </div>
        <div>
          <label>Resumen de prestamo</label>
          <div>
            <label>Préstamo</label>
            <label>${obj.monto}</label>
            <label>Intereses</label>
            <label>${obj.interes}</label>
            <label>Total a pagar</label>
            <label>${obj.montoTotal}</label>
          </div>
        </div>
        <form>
        <div class="form-group col-md-6">
        <label for="inputContraseña">Ingresa el número de cuenta donde se depositará el prestamo</label>
        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
      </div>
      <div >
      <label for="inputContraseña">BANCO</label>
      <select class="form-control form-control-lg">
        <option>BANCO BNG</option>
        <option>BANCO DE CRÉDITO DEL PERÚ(BCP)</option>
        <option>BANCO CONTINENTAL(BBVA)</option>
        <option>BANCO INTERBANK</option>
        <option>BANCO DE LA NACIÓN</option>
      </select>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
     Acepto terminos condiciones </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
  Acepto compartir los datos de ventas de Visanet con la entidad financiera </label>
  </div>
    <button type="button" class="btn btn-warning" id="btn-recibir-prestamo">RECIBIR MI PRÉSTAMO</button>
    <section>
       <h2>ATENCIÓN AL CLIENTE:</h2>
        <p>WHATSAPP 978 927 345</p>
        <p>CALL CENTER 01 567</p>
   </section>
  </form> `;
    newSection.innerHTML = template;
    // const inputName = newSection.querySelector('#inputNombre');
    // const inputLastName = newSection.querySelector('#inputLastName');
     newSection.querySelector('#btn-recibir-prestamo').addEventListener('click', () => {
       newSection.innerHTML = ''; 
       newSection.appendChild(fifthLoad())
      // validateName(inputName);
      // validateName(inputLastName);
     });
    return newSection;  
  };