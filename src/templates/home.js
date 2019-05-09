import {changeHash} from '../router.js';

export const home = () => {
  const inicio = document.createElement('div');
  const template = `
    <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#home">MUJER EMPRENDEDORA</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link" href="#">INICIAR SESIÓN<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">REGISTRATE</a>
          </li>
          </ul>
      </div>
    </nav>
  </header>
  <div class="cover-container pb-5">
  <h3 class="jumbotron-heading "> <strong>TE AYUDAMOS A HACER TUS 
  <br> SUEÑOS POSIBLES</strong> </h1>
    <button type="button" class="btn  btn-lg btn-outline-danger">CONOCE NUESTROS SERVICIOS</button>
  </div>
  
  <section class="text-center">
 <p class="h3"> "La plataforma colaborativa que busca el empoderamiento
 <br>
  femenino mediante el crecimiento económico de las mujeres
  <br>
  emprendedoras" 
 </p>

 <p class="h2 my-5"> ¿QUÉ ENCONTRÉ EN JUNTAS? </p>
  </section>

  <section class="container-fluid">
    <div class="row">
    <span> 1 </span> 
      <img src="img/prestamo.png" class="rounded float-left img-responsive" alt="Responsive image">
      <br>
      <span  class= "text-center"> Podrás solicitar préstamos 
      <br> accesibles y sin tantos 
      <br> <papeleos. 
      </span>
      <br>
    
      <span> 2 </span> 
      <img src="img/provehedores.png" class="rounded mx-auto d-block img-responsive " alt="Responsive image">
      <br>
      <span class="text-center"> encontrarás colaboradores y
      <br> proveedores de confianza
      <br> para tu negocio.
      </span>
      <br>

    <span> 3 </span> 
      <img src="img/crecer.png" class="rounded float-right img-responsive" alt="Responsive image">
      <br>
      <span class="text-center "> Información para hacer
      <br> crecer tu negocio,tips y 
      <br> recomendaciones.
      </span>
      <br>

    </div>
  </section>

  <section class="container-fluid ">
  <p class="h2 my-5 text-center " > NUESTROS SERVICIOS </p>
    <div class="row">
      <div class="col">
        <img src="https://user-images.githubusercontent.com/45084376/57448742-be134f80-721f-11e9-86ea-053d82eaa092.jpg" class= "img-responsive" alt="">
      </div>
      <div class="col">
        <p class="h5 my-5"> PIDE UN PRÉSTAMO PARA TU NEGOCIO </p>
        <br>
        <p> Encuentra préstamos a tu medida,sin tantos 
        <br> requisitos y de forma rápida
        <br>
        <button type="button" class="btn btn-outline-warning btn-sm my-3">PIDE TU PRESTAMO </button>
      </div>

      <div class="row">
      <div class="col">
        <p class="h5 my-5"> ENCUENTRA UN PERSONAL DE CONFIANZA </p>
        <br>
        <p> Ingresa tu perfil, cuéntanos qué necesitas
        <br> (proveedores,colaborados) y te conectamos con la
        <br> persona ideal para tu nengocio.
        <br>
        <button type="button" class="btn btn-outline-warning btn-sm my-3">INCREMENTA TU RED DE CONTACTOS </button>
      </div>
      <div class="col">
        <img src="https://user-images.githubusercontent.com/45084376/57450394-fd439f80-7223-11e9-8637-4698d6f55e51.jpg" class= "img-responsive" alt="">
      </div>

      <div class="row">
      <div class="col">
        <img src="https://user-images.githubusercontent.com/45084376/57450399-ffa5f980-7223-11e9-81d3-066b2aa0d208.jpg" class= "img-responsive" alt="">
      </div>
      <div class="col">
        <p class="h5 my-5"> HAZ CRECER TU NEGOCIO </p>
        <br>
        <p> Te brindamos información del sector de tu  
        <br>negocio y te recomendamos soluciones para 
        <br>hacerlo crecer
        <br>
        <button type="button" class="btn btn-outline-warning btn-sm my-3">HAZ CRECER TU NEGOCIO</button>
      </div>
    </div>
  </section>

  <section class="container-fluid ">
  <p class="h4 my-5 text-center "> Y TAMBIÉN TE OFRECEMOS SOLUCIONES PARA INCREMENTAR TUS VENTAS </p>

  </section>
    `;
  inicio.innerHTML = template;
  return inicio;
};