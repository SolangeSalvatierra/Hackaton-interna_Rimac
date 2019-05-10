export const nav = () => {
  const header = document.createElement('div');
  const temHeader = `
  <header class="container-lg-fluid">
  <div class="container-lg-fluid">
      <nav class="navbar navbar-expand-lg navbar-warning bg-warning" class="chuleta"> 
      <a class="navbar-brand" href="#">MUJER EMPRENDEDORA</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/">PIDE TU PRÉSTAMO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">RED DE CONTACTOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">HAZ CRECER TU NEGOCIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">INICIAR SESIÓN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">REGISTRATE</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</header>
    
    `;
  header.innerHTML = temHeader;
  return header;
};