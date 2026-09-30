// Atividade Number
// crie uma variável chamada anoAtual e outra chamada anoNascimento.
// calcule e exiba a idade no(a) console.





// Estrutura Condicionais (Tomando Decisões)
// As estruturas condicionais permitem executar diferentes blocos de código depedendo de uma condição 

// if/Else - Condicionais
// IF - verifica se uma condição é verdadeira e executa o código denntro dele, se a condição for falsa, o ELSE pode excutar outro bloco de código

// IF/ELSE - Condicionais

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}


// IF, ELSE IF, ELSE (Múltiplas condições)

let idade2 = 19;

if (idade2 < 12) {
    console.log("Você é uma criança");
} else if (idade2 < 18) {
    console.log("Você é um adolescente");
} else {
    console.log("Você é um adulto");
}