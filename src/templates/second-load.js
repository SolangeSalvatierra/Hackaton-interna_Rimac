import { validateName } from '../controller/funcSecond.js';

export const secondLoad = () => {
    const newSection =  document.createElement('SECTION');
    const template = `
      <h1>Ingrese tus datos</h1>
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$" id="inputNombre" maxlength="12" required >
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Apellido</label>
      <input type="text" class="form-control" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$" id="inputLastName" maxlength="" required >
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">EMAIL</label>
      <input type="email" class="form-control" id="inputEmail4" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputDni">DNI</label>
      <input type="text" class="form-control" id="inputDni" pattern="(^[0-9]{8}+$)" minlength ="8" maxlength="8" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCelular">CELULAR</label>
      <input type="text" class="form-control" id="inputCelular" pattern="(^[0-9]{9}+$)" minlength ="9" maxlength="9" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputRuc">RUC</label>
      <input type="text" class="form-control" id="inputRuc" pattern="(^[0-9]{10}+$)" minlength ="9" maxlength="10" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCodigo">CÓDIGO DEL CLIENTE VISANET</label>
      <input type="text" class="form-control" id="inputCodigo" pattern="(^[0-9]{9}+$)" minlength ="9" maxlength="9" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputRubro">RUBRO DEL NEGOCIO</label>
      <input type="text" class="form-control" id="inputRubro" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputContraseña">CONTRASEÑA</label>
      <input type="password" class="form-control" id="inputContra" pattern="^[A-Za-z0-9]{6,15}" maxlength="15" required>
    </div>
    <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
       NO SOY CLIENTE DE VISANET
      </label>
    </div>
  </div>
  </div>
  <button type="submit" class="btn btn-primary" id ='myButton'>SOLICITAR</button>
</form>
     `;
  newSection.innerHTML = template;
  const inputName = newSection.querySelector('#inputNombre');
  const inputLastName = newSection.querySelector('#inputLastName')
  //  newSection.querySelector('#myButton').addEventListener('click', () => {
  //   validateName(inputName);
  //   validateName(inputLastName);
  //  });
return newSection;  
}