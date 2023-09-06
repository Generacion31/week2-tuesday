/******************************************/
/* CONDICIONALES -> OPERADORES TERNARIOS */
/*****************************************/


//EJEMPLO PERMISO
const edad = 18

const permiso = (edad >= 18) ? 'Puede conducir' : 'No puede conducir'

console.log(permiso); //'Puede conducir'


//La sintaxis es la siguiente =
// condicion(true || false ) ? valor si es true ✅ : valor si es false ❌

const nombreDeUsuario = 'Dayana'

const saludo = nombreDeUsuario ?
  `Bienvenido ${nombreDeUsuario}`
  :
  'No se ha iniciado sesion'

console.log(saludo);

//Ejemplo QUE NO SE RECOMIENDA EN LA VIDA PROFESIONAL

const num1 = 9
const num2 = 3

const result = (num1 < num2) ?
  "El num2 es mayor que el numero 1"
  :
  (num1 > num2) ?
    "El num1 es mayor que el num2"
    :
    'Los numeros son iguales'

console.log(result);
