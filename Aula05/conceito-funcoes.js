// Funções em JavaScript

// O que é uma função?
// Uma função é um bloco de codigo reutilizavel, criado para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// Ela processa
// Devolve um resultado (return)

// -------------------------------
// Estrutura basica de uma função
//--------------------------------

// function nomeDaFuncao(parametro1, parametro2) {
//     //codigo que será executado
// return resultado
// }

// function --> palavra-chave
// nomeDaFuncao --> nome da funcao
// parâmetros --> valores que a funcao recebe
// return --> valor que a funcao devolve

// 5 exemplos

// 1 - Somar dois números

function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3))
console.log("------------")

// 2 - Converter real para dolar

function realParaDolar(valorReal, cotacao) {
    return valorReal / cotacao;
}

console.log(realParaDolar(10, 5.20).toFixed(2))
console.log("------------")

// 3 - Converter dólar para real

function dolarParaReal(valorDolar, cotacao) {
    return valorDolar * cotacao;
}

console.log(dolarParaReal(5, 5.20).toFixed(2))
console.log("-----------")

// 4 - Aumento de salario (Você merece 25% de aumento)

function aumentoSalario(salario) {
    return salario + (salario * 0.25)
}

console.log(`Com o aumento no seu salario, o total ficou ` + aumentoSalario(1000))
console.log("-----------")

// Verifique se é par ou impar?

function imparPar(valor) {
    if (valor % 2 === 0) {
        console.log("Seu numero é Par")
    } else {
        console.log("Seu numero é Impar")
    }
}
imparPar(2)
