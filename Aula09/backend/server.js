// ==============================
// NOSSA API DE CACHORRO
//
// Agora as fotos NÃO são mais baixadas automaticamente!
// Elas DEVEM existir manualmente na pasta
// data/fotos
// ==============================

// ROTAS:
// GET /api/cachorros/aleatorios
// GET /api/cachorros/: raca

// Importat o framework Express para criar o servidor
const express = require("express")
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors")
// Importa o módulo de arquivo do NODE
const fs = require("fs")
// Importa utilidade para trabalhar com caminhos de arquivos
const path = require("path")
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json")
// cria a aplicação Express
const app = express()
// definir a porta onde o servidor irá rodar
const PORT = 3000
// Habilitar o uso do cors
app.use(cors())

// ==============================================================
// SERVIR ARQUIVOS ESTÁTICOS
//===============================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminhos real da pasta do servidor
    )
)

// =======================================
// Função Auxiliar
// =======================================

// função que recebe um array e retorna u, item aleatorio dele
function sortear(array) {
    // gera um numero aleatorio entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na linha
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.lenght - Multiplica o numero sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo
    // const i = guarda a posição na variavel i
    const i = Math.floor(Math.random() * array.length)
    // retorna o item sorteado
    return array[i]
}