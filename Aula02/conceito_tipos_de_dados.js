// Tipos de dados
// No javascript, tudo o que armazenamos em variaveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

// Principais Tipos de dados:
// String (texto)
// Number (números)
// Boolean (verdadeiro ou falso)
// Object (Objetos, que agrupam informações)
// Array (listas de valores)
// Null (Valor vazio)
// Undefined (quando algo não foi definido)

// String (textos)
// Uma string é um texto, sempre escrito entre aspas ("" ou '')
let nome = "jarvis"
let mensagem = 'Hello, World!';

// console.log(nome);
// console.log(mensagem);

let saudacao = "Ola, " + nome + "!";
console.log(saudacao);
// Exibir "Olá, jarvis!"

// typeof
// o typeof serve para descobrir o tipo de um valor ou variavel
// let nomeDois = "Bryan - Não pode fone de ouvido!";
// let nometres = "Vilar - Não pode celular!";
// console.log(typeof nomeDois);
// console.log(typeof nometres);

let soma = 10 + 5;
console.log(typeof soma); // Exibir number

// Boolean (Verdadeiro ou falso)
// Um boolean pode ter apenas dois valores: true (Verdadeiro) ou fals (Falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); // Exibe true
console.log(menorDeIdade); // Exibe False

let idade = 20;
let podeDirigir = idade >= 18;
console.log(podeDirigir);

