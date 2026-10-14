/*
=====================================
FRONT-END - Consome a nossa API Local
=====================================

Este arquivo roda no navegador.
Ele fez requisições para nossa API Node.js
e mostra os dados na tela
*/

// =========================
// Elementos HTML
// =========================
// Foto do cachorro
const dogImage = document.getElementById("dogImage")
// Nome da raça
const breedName = document.getElementById("breedName")
// Cachorro aleatorio
const randomBtn = document.getElementById("randomBtn")
// Botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn")
// Campo de texto onde o usúario digita a raça
const breedInput = document.getElementById("breedInput")
// Area onde fica a imagem do cachorro
// Usamos querySelector porque é uma classe (.dog-area)
const dogArea = document.querySelector(".dog-area")

// ===========================
// URL DA API
// ===========================

const API = "http://localhost:3000/api/cachorros"

// ===========================
// Função Principal
// ===========================

async function buscarCachorro(url){
    // Adiciona a classe "loading"
    // Normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading")

    try {
        // Faz requisição HTTP para a API
        const response = await fetch(url)
        // converte a resposta para json
        const data = await response.json()
        // Mostra no console a resposta da API
        console.log("Resposta da API:", data)

        // Vamos verificar se a API retornou erro
        if (data.status === "error"){
            // Mostra a mensagem de erro na tela
            // BreedName - Elemento HTML
            // .textContent - Propriedade que define o texto do elemento
            // data - Objeto com os dados recebidos da API
            // .message - Propriedade que contém a mensagem ou URL
            breedName.textContent = data.message
            // Remove a imagem
            dogImage.src = ""
            // Execução da função
            return;
        }

        // Coloca a imagem do cachorro na tela
        // o src define qual imagem será exibida
        dogImage.src = data.message

        // extrai o nome da raça da URL da imagem
        // Exemplo URL:
        // http://localhost:3000/fotos/husky/1.jpg

        // Separa a URL em partes usando "/"
        const partes = data.message.split("/")

        // Pega a posição 5 do array
        // que corresponde ao nome da raça
        const raca = partes[5]

        // Coloca a primeira letra maiúscula
        // Ex: husky --> Husky
        breedName.textContent =
        // raca.charAt(0) - pega a primeira letra
        //.toUpperCase() - Transforme em maiuscula
        // raca.slice(1) - pega o texto a partir da segunda letra
            raca.charAt(0).toUpperCase() + raca.slice(1)

    } catch (erro){
        // Caso o servidor esteja desligado
        // ou aconteça algum erro na requisição

        console.error(erro)

        // Mostra mensagem na tela
        breedName.textContent = 
            "⚠️ Servidor offline - rode: node server.js"
        
        // Remove a imagem
        dogImage.src = ""
    } finally {
        // Remove a classe de carregamento
        // Independente de erro ou sucesso
        dogArea.classList.remove("loading")
    }    
}

// =========================
// AÇÕES
// ========================

// Função que busca o cachorro aleatorio
function cachorroAleatorio(){
    // Chamar a função principal
    // Passando a rota /aleatorio da API
    buscarCachorro(`${API}/aleatorio`)
}

// Função que busca cachorro por raça
function buscarPorRaca(){
    // Pegar o texto digitado no input
    const raca = breedInput.value.trim().toLowerCase()

    // Verificar se o usuário digitou algo
    if (!raca) {
        // Se não digitou, mostra alerta
        alert ("Digite uma raça!")
        // Interrompe a função
        return
    }

    // Chamar API passando a raca na URL
    // Exemplo: /api/cachorro/husky
    buscarCachorro(`${API}/${raca}`)
}

// =======================================
// EVENTOS
// =======================================

// quando clicar no botão "Aleatorio"
randomBtn.addEventListener("click", cachorroAleatorio)

// quando clicar no botão "buscar"
searchBtn.addEventListener("click", buscarPorRaca)

// Quando clicar na imagem do cachorro
// Carrega outro cachorro aleatorio
dogImage.addEventListener("click", cachorroAleatorio)

// Quando o usuário apertar o ENTER no input
breedInput.addEventListener("keypress", (event) =>{
    // Verifica se a tecla pressionada foi enter
    if (event.key === "Enter"){
        // Executa a busca por raça
        buscarPorRaca()
    }
})

cachorroAleatorio()