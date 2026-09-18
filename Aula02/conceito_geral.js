// INICIO BACKEND - JAVASCRIPT

// VARIAVEIS

// ANTIGO!, Pode ser redeclarado e mudar o valor
var idade = 10
var idade = 20 // Não gera erro

// MODERNO!, Não pode ser redeclarado, mas pode mudar o valor
let nome = "Julia"
nome = "Dafny"; // Permitido

// let nome = "jose"; // Erro 

// const é fixo, não pode mudar o valor
const pi = 3.14;
// pi = 40; // Erro 

// _______________________________________________________________
// -----------------------------
// Formas de Escrever um Codigo
// -----------------------------

// Camel case * A mais famosa
// - Primeira palavra minuscula
// - Palavras seguintes começam com maiúsculas

// let nomeCompleto; let idadeUsuario; functionCalcularIdade(){}

// _______________________________________________________________

// _______________________________________________________________
// PASCALCASE
// - Todas as palavras começam com maiúsculas

// class UsuarioSistema {
    //   constructor(nome, idade) {
        //     this.nome = nome;
        //     this.idade = idade;
        //   }
        // };
// _______________________________________________________________
// SNAKE CASE
// - Palavras separadas por underline

// let nome_completo, let total_vendas;
// _______________________________________________________________

// Template String
let idade2 = 10
console.log(`Sua idade é: ${idade2} anos.`)