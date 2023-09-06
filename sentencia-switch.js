/******************************************/
/* CONDICIONALES -> SENTENCIA SWITCH     */
/*****************************************/

/**
 * La sentencia switch es una forma de evaluar una codicion, y solo una condicion ⚠️ y ejecutara una secuencia de instrucciones (DEPENDIENDO SI LA CONDICION SE HA CUMPLIDO O NO)
 */


// Sintaxis 
/**
 * switch(valor){ valor:"expresion de control", o tambien llamada  "expresion de prueba"
 *  ⚠️case valor1: // implicitamente estara haciendo valor===valor1
 *    bloque de codiago que se ejecutara
 *    ⚠️break ->> la funcion que se detenga la ejecucion, una vez que se implemento el bloque de codigo
  * ⚠️case valor2: // implicitamente estara haciendo valor===valor2
  *    bloque de codiago que se ejecutara
  *    ⚠️break ->> la funcion que se detenga la ejecucion, una vez que se implemento el bloque de codigo
  *  default:
  *     bloque de codiago que se ejecutara // EL DEFAULT NO LLEVA BREAK
 * 
 * 
 * } 
 */


const diaDeLaSemana = 'Miercoles'

let mostrarDia = null

switch (diaDeLaSemana) {
  case 'Lunes':
    mostrarDia = 'El dia es lunes'
    break
  case 'Martes':
    mostrarDia = 'El dia es martes'
    break
  case 'Miercoles':
    mostrarDia = 'El dia es miercoles'
    break
  case 'Jueves':
    mostrarDia = 'El dia es Jueves'
    break
  case 'Viernes':
    mostrarDia = 'El dia es Viernes'
    break
  case 'Sabado':
    mostrarDia = 'El dia es Sabado'
    break
  case 'Domingo':
    mostrarDia = 'El dia es Domingo'
    break
  default:
    mostrarDia = "Nos has ingresado un dia de la semana"
}


console.log(mostrarDia);

//AGRUPAMIENTOS DE CASES

const mesActual = 'febrero'

let estacion = null

switch (mesActual) {
  case "enero":
  case "febrero":
  case "marzo":
    estacion = 'verano'
    break
  case "abril":
  case "mayo":
  case "junio":
    estacion = 'otoño'
    break
  case "julio":
  case "agosto":
  case "septiembre":
    estacion = 'invierno'
    break
  case "octubre":
  case "noviembre":
  case "diciembre":
    estacion = 'primavera'
    break
  default:
    estacion = 'No es una estacion del año'
}

console.log(estacion);