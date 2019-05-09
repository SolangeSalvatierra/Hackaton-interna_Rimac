import { changeHash } from "../router.js";

export const home= () => {
    const template = `
    <header class=" ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div class="navbar-nav">
                     <a class="nav-item nav-link active" href="#home" <span class="sr-only">MUJER EMPRENDEDORA</span></a>
                     <a class="nav-item nav-link" href="#">INICIAR SESIÓN</a>
                     <a class="nav-item nav-link" href="#">REGISTRATE</a>
                 </div>
             </div>
        </nav>
    </header>
    <button type="button" id="prestamo">PIDE TU PRÉSTAMO</button>
    <button type="button" id="contactos">RED DE CONTACTOS</button>
    <button type="button" id="negocio">HAZ CRECER TU NEGOCIO</button>
    `; 
    const div = document.createElement('div');
    div.innerHTML = template; 

    const btnPrestamo = div.querySelector('#prestamo')
    const btnContactos = div.querySelector('#contactos')
    const btnNegocio = div.querySelector('#negocio')

    btnPrestamo.addEventListener('click', () => {
        changeHash('/loan')
    })
    btnContactos.addEventListener('click', () => {
        changeHash('/contactos')
    })
    btnNegocio.addEventListener('click', () => {
        changeHash('/negocio')
    })

    return div
}