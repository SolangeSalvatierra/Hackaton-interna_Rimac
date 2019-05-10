import {home} from './templates/home.js';
import {nav} from './templates/nav.js';
// import {loan} from './templates/loan.js';
import { secondLoad } from './templates/second-load.js';


export const changeHash = (nameHash) => {
  window.location.hash = nameHash;
};

// cambio de ruta 
const cambiarTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return vistaTmp('#/home');
  } else if (hash === '#/home' || hash === '#/loan') {
    return vistaTmp(hash);
  } else {
    return vistaTmp('#/home');
  }
};
// llamo a lor templates para cambiar las rutas
const vistaTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';
  switch (router) {
  case 'home':
    contenedor.appendChild(home());
    break;
        
  case 'loan':
    contenedor.appendChild(secondLoad());
    contenedor.appendChild(nav());
    break;
 
        // // case 'menu':
        // // contenedor.appendChild(menu());
        // // contenedor.appendChild(navHome());
        // // break;
        // // default: 
        // // contenedor.appendChild(home()); 
        // // contenedor.appendChild(home());
        // // break;
  }
};
export const routerVN = () => {
  window.addEventListener('load', cambiarTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => cambiarTmp(window.location.hash);
};