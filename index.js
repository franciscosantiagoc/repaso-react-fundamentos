
//No se recomienda el uso de estas funciones porque pueden ser sobre escritas 
//function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }

//es recomendable el uso de la funciones de este tipo
const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => ({
      uid: 'ABC123',
      username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
  uid: 'ABC567',
  username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );