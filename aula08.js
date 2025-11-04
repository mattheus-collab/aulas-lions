// let entradaUsuario = "";
// process.stdin.on("data", function (data) {
//     entradaUsuario = data.toString();
//     console.log("Você digitou: ", entradaUsuario);
//     for (let i = 0; i <= 10; i++) {
//         console.log(i * entradaUsuario)
//     }
// });
let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;

for (let i = 0; i <= 999; i++) {
    if (i % 2 === 0) {
        somaPares += i;
        totalPares++;
    } else {
        somaImpares += i;
        totalImpares++;
    }
}

let mediaPares = somaPares / totalPares;
let mediaImpares = somaImpares / totalImpares;

console.log("Soma dos pares:", somaPares);
console.log("Total de pares:", totalPares);
console.log("Média dos pares:", mediaPares);

console.log("Soma dos ímpares:", somaImpares);
console.log("Total de ímpares:", totalImpares);
console.log("Média dos ímpares:", mediaImpares);
