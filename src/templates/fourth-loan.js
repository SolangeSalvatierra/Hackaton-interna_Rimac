export const secondLoad = () => {
  const newSection = document.createElement('SECTION');
  const template = `
      <h1>¡Ya falta poco para recibir tu préstamo!</h1>
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
  <button type="button" class="btn btn-warning">RECIBIR MI PRÉSTAMO</button>
  <section>
     <h2>ATENCIÓN AL CLIENTE:</h2>
      <p>WHATSAPP <span>978 927 345</span></p>
      <p>CALL CENTER <span>01 567</span></p>
 </section>
</form> `;
  newSection.innerHTML = template;
  const inputName = newSection.querySelector('#inputNombre');
  const inputLastName = newSection.querySelector('#inputLastName');
  //  newSection.querySelector('#myButton').addEventListener('click', () => {
  //   validateName(inputName);
  //   validateName(inputLastName);
  //  });
  return newSection;  
};