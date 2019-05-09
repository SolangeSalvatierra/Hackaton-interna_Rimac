// debugger
// const inputNameFunc = () => {
let inputName = document.getElementById('prueba');
// }
// const capitalize = (firstLetter) => {
//     if (typeof firstLetter !== 'string') return '';
//     return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
//   }
//   console.log(capitalize('sol'));
  
  
const validateName = (name) => {
    // const newName = name.charAt(0).toUpperCase() + name.slice(1);
  for (let i = 0; i < newName.length; i++) {
    const caracter = newName.charAt(i);
    if (isNaN(caracter)) {
      alert('es un exito');      
    } else {
      alert('no se aceptan números'); 
    }
    return newName;
  }
};
// validateName(inputName);
document.getElementById('myButton').addEventListener('click', () => validateName(inputName.value));


