const prompt = require("prompt-sync")();
lluvia = [0.2,0,0.2,0,17,3.1,5,8,9,0.2,0.2,0,17,3.1,5,5,8,9,0.2,0.2,0,17,3.1,5,0.2,0,0.2,0,17,3.1]
suma = 0
cont = 0
mayor = -1
// console.log(lluvia)
// console.log(lluvia.length)
for(var i=0; i<30; i++){
    suma = suma + lluvia[i];
    promedio = suma/(lluvia.length)
    if (lluvia[i]>mayor){
        mayor = lluvia[i];
        indice = i+1
    }
}
for(var i=0; i<30; i++){
    if (lluvia[i]<promedio){
        cont = cont +1
    }
}
do{
    console.log("Bienvenido al registro de dato Pluviométricos del mes de septiembre")
console.log("1.- Promedio mensual de lluvia \n2.- Total de días bajo el promedio mensual \n3.- Cantidad de lluvia del día más lluvioso \n4.- Salir")
opcion = parseInt(prompt("Ingrese su opción:        "))
switch(opcion) {
    case 1: console.log("El promedio mensual de lluvia fue de", promedio);
    break
    case 2:console.log("El total de días bajo el promedio mensual fue de", cont);
    break
    case 3:console.log("El más lluvioso fue el", indice, "de septiembre, y llovió", mayor, "mm");
    break
    case 4: console.log("Adiós");
    break
    default:
      console.log("El numero que ingresó no es parte del menú, vuelva a ingresar su opción")
      break

}
}while(opcion!=4)




