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
    
    <p> TE AYUDAMOS A HACER TUS SUEÑOS POSIBLES</p>
    <button type="button" class="btn  btn-lg btn-outline-danger">CONOCE NUESTROS SERVICIOS</button>

    </section>
    `;
  inicio.innerHTML = template;
  return inicio;
};