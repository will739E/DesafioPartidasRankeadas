let vitorias = 10;
let derrotas = 5;
let saldo = calcularSaldo(vitorias,derrotas)

function calcularSaldo(vit, der) {
    let saldo = vit - der;
    return saldo
}

function rank(saldo) {
    let elo;
    switch (true) {
        case (saldo <= 10):
            elo = "Ferro";
            break;
        case (saldo >= 11 && saldo <= 20):
            elo = "Bronze";
            break;
        case (saldo >= 21 && saldo <= 50):
            elo = "Prata";
            break;
        case (saldo >= 51 && saldo <= 80):
            elo = "Ouro";
            break;
        case (saldo >= 81 && saldo <= 90):
            elo = "Diamante";
            break;
        case (saldo >= 91 && saldo <= 100):
            elo = "Lendário";
            break;
        case (saldo >= 101):
            elo = "Imortal";
            break;
    }
    return elo;
}
console.log(`O herói tem de saldo ${saldo} e está no nivel ${rank(saldo)}`)

console.log(`saldo ${calcularSaldo(vitorias,derrotas)} </br> Elo ${rank(calcularSaldo(vitorias,derrotas))}`) //chamando função dentro de funçao