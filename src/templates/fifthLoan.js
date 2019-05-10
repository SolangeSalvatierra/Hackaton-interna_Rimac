export const fifthLoad = () => {
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
        <h1>¿LISTA PARA EL DESEMBOLSO?</h1>
        <div>
            <i class="fab fa-whatsapp"></i>
            <label>NOS CONTACTAMOS</label>
            <label>Nos pondremos en contacto contigo dentro de las 24 hrs.</label>
        </div>
        <div>
            <i class="fas fa-dollar-sign"></i>
            <label>TE ENTREGAMOS TU DINERO</label>
            <label>Recibiras tu desembolso en 48 hrs.</label>
        </div>
       <h2>ATENCIÓN AL CLIENTE:</h2>
        <p>WHATSAPP 978 927 345</p>
        <p>CALL CENTER 01 567</p>
   </section>
  </form> `;
  newSection.innerHTML = template;
  // const inputName = newSection.querySelector('#inputNombre');
  // const inputLastName = newSection.querySelector('#inputLastName');
  // //  newSection.querySelector('#myButton').addEventListener('click', () => {
  // //   validateName(inputName);
  // //   validateName(inputLastName);
  // //  });
  return newSection;  
};