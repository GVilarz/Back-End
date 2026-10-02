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

    // Alterando elemento da classe
    caixa[0].innerText = "Primeiro paragrafo alterado"
    caixa[1].innerText = "Segundo paragrafo alterado"

    // Alterando imagem
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbKsj_ju7MkU5dDFlTBKu7BjzzuozVTGenBTF3gu9LQ&s=10"
}
