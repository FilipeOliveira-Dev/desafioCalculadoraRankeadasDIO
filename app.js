let vitorias = 80;
let derrotas = 0;

function calculaSaldo (vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo;
}
saldoDeVitorias = calculaSaldo(vitorias, derrotas)

function defineNivel (saldoDeVitorias){
    let nivel;
    if (saldoDeVitorias <= 10) {
        nivel = "Ferro";
    }
    if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
        nivel = "Bronze";
    }
    if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
        nivel = "Prata";
    }
    if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
        nivel = "Ouro";
    }
    if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
        nivel = "Diamante";
    }
    if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
        nivel = "Lendário";
    }
    if (saldoDeVitorias > 100) {
        nivel = "Imortal";
    }
    return nivel;
}
resultadoNivel = defineNivel(saldoDeVitorias)

console.log(`O Herói tem saldo de ${saldoDeVitorias}, e está no nível de ${resultadoNivel}`);