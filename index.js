
const prompt = require("prompt-sync")();
bebidas  = []
suma = 0
mayor = -1
cont = 0
for (var i=0; i<3; i++) {
  bebidas.push(parseInt(prompt("Ingrese bebida día: ")))
  suma = suma + bebidas[i];
  if (bebidas[i] > mayor){
    mayor = bebidas[i];
    indice = i+1;
  }
  if (bebidas[i]%2==0){
    cont=cont+1;
  }
}
do{
  console.log("***************************************************")
  console.log("****                   Menú                    ****")
  console.log("***************************************************")
  console.log("1. Calcular el total de venta de los 7 días")
  console.log("2. Calcular la venta promedio")
  console.log("3. Indicar cuál fue el día (índice) con mayor venta")
  console.log("4. Indicar la cantidad de ventas pares totales")
  console.log("5. Salir del programa")
  opcion = prompt("Ingrese su opcion:   ")
  switch (opcion) {
    case "1":
      console.log("El total de venta de los 7 días fue ", suma)
      break
    case "2":
      console.log("La venta promedio fue:", suma/(bebidas.length))
      break
    case "3":
      console.log("La mayor venta fue de :", mayor, "el día", indice)
      break
    case "4":
      console.log("La cantidad de ventas pares fue de:", cont)
      break
    case "5":
      console.log("Adiós")
      break
    default:
      console.log("El numero que ingresó no es parte del menú, vuelva a ingresar su opción")
      break
  }
}while (opcion!=5)