//============================ 
// API DE CACHORRO 
//============================

// Endereço da API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random';

// Pegando os elementos do HTML

// - Imagem pelo seu ID
const fotoCachorro = document.getElementById("fotoCachorro")


// - Botão pelo seu ID
const btnNovaFoto = document.getElementById("btnNovaFoto")

// ================================
// Função para buscar uma nova foto
// ================================

async function buscarFoto() {
    // Fazer uma requisição para a API
    const resposta = await fetch(url)
    // Converter a resposta da API para JSON
    const dados = await resposta.json()
    // Mostrar no console o que a api retornou
    console.log(dados)
    // Alterarmos o endereço da imagem no html
    fotoCachorro.src = dados.message
}

// =======================
// Botão
// =======================
// Quando o usuário clicar no botão
// Vamos executar a função buscarFoto
btnNovaFoto.addEventListener('click', buscarFoto)

// Quando a pagina abrir,
// Ja buscamos uma foto automaticamente
buscarFoto()