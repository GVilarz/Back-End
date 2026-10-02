// =======================================
// SELECIONANDO ELEMENTOS DO DOM
// =======================================

// Selecionando por ID

let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagem = document.getElementById("imagemteste")

// Selecionando por classe
let caixa = document.getElementsByClassName("box")

//Mostrar no console.log
console.log(titulo)
console.log(caixa)
console.log(imagem)

// ==============================
// FUNÇÃO PARA ALTERAR O CONTEUDO
// ==============================

function alterar() {
    titulo.innerHTML = "Gato Reliquia"
    subtitulo.innerText = "GLife Fundador"
    paragrafo.innerHTML = "Cookie e Jujuba"
    
}