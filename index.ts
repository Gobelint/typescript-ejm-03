let suma:number=0;
let sumaMultiplos5:number=0;
let sumaEnteros:number=0;
let sumaImpares:number = 0;
let cuentaImpares:number = 0;

//
// Suma
for (let numero = 1;  numero <=10; numero++) {
  suma+=numero;
}
console.log(`La sumatoria de los 10 primeros numeros es ${suma}`);
//
// Multiplos de 5
console.log('');
console.log('Numeros Multiplos de 5:')
for (let numero = 1;  numero <=100; numero++) {
  if (numero % 5 == 0)  {
    console.log(numero);
    sumaMultiplos5+=numero;
  }
}
console.log(`La sumatoria de los 100 primeros numeros multiplos de 5 es ${sumaMultiplos5}`);
//
// enteros
console.log('');
console.log('Numeros pares:')
for (let numero = 1;  numero <=100; numero++) {
  if (numero % 2 == 0 ) 
    console.log(numero);{
    sumaEnteros+=numero;
  }
}
console.log(`La sumatoria de los 100 primeros numeros enteros es ${sumaEnteros}`);

//
// Numeros Impares
console.log('');
console.log('Numeros impares:')
for (let numero = 1; numero <= 300; numero++) {
  if (numero % 2 == 1) {
    console.log(numero);
    cuentaImpares+=1;
    sumaImpares+=numero;
  }
}
console.log(`La sumatoria de los 300 primeros numeros impares es ${sumaImpares}`);
console.log(`La cuenta de los 300 primeros numeros impares es ${cuentaImpares}`);