// ================================================
// Server.js - BACK-END COMPLETO
// ================================================

// Parte 1: Importar as ferramentas
const express = require('express')           // Biblioteca para criar o servidor
const path = require('path')                 // Ajuda a montar caminhos de pastas
const {DatabaseSync} = require('node:sqlite')// Banco SQLite (já vem dentro do node!)

// Parte 2: Criar o servidor e abrir o banco
const app = express() //  Cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); // Abre o banco (se não existir, cria o arquivo). ---> __dirname = pasta desse arquivo

// Cria a tabela "tarefas" se ela ainda não existir
banco.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo      TEXT NOT null,
    concluida   INTEGER DEFAULT 0
    )
`);

// Parte 3: Configurar o servidor (os famosos middlewares)
// app.use: "TODO pedido que chegar, passe primeiro por aqui."

app.use(express.json()) // Faz o servidor entender JSON
app.use(express.static(path.join(__dirname, '..', 'public')))
// Entrega a página da pasta "public"

//-----------------------------------------
// Parte 4: ROTAS(a API)
//-----------------------------------------
// ROTA: A combinação do metodo + endereço
// API: é o conjunto dessas rotas
//
// Toda rota recebe 2 coisas (Sempre na ordem abaixo)
// Requisição = o PEDIDO chegou
// Resposta = o que vamos devolver para o front
//
// Operação | Método HTTP | Endereço | Comando SQL
// -----------------------------------------------
// Create   | POST        | /tarefas    | Insert
// Read     | GET         | /tarefas    | Select
// Update   | PUT         | /tarefas:id | Insert
// Delete   | DELETE      | /tarefas:id | Insert

// ==================== Criar ======================
// POST /tarefas ---> salvar uma tarefa nova no banco de dados (sqlite)
app.post('/tarefas', (req, res)=>{
    const titulo = req.body.titulo // Texto enviado pela página

    // Se o titulo estiver, vazio, avisa que deu erro (400) e para aqui
    if (!titulo) {
        return res.status(400).json({erro: 'Digite um titulo'})
    }
    // INSERT: adicionar uma linha na tabela. Lembre-se os "?" são trocados pelo valor do titulo
    banco.prepare('INSERT INTO tarefas (titulo) VALUES(?)').run(titulo)
    res.json({ ok: true})
});

// PASSO A PASSO do que acontece no CREATE
// 1) O usuário digita no campo e clica em "adicionar" no navegador
// 2) O front manda um POST para /tarefas com {"titulo":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o metodo POST e o endereço é /tarefa
// 4) "res.body.titulo" é o texto que o front mandou, lembrando só funciona por causa do express.json() que está lá em cima!
// 5) Validação: se vier vazio, respondemos com status 400(= "pedido errado") em um JSON de erro, NUNCA confie no front, sempre valide aqui.
// 6) Insert em tarefas
// 7) Resposta

// ========================== LER ============================
// GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (req, res) =>{
    // SELECT: Busca todas as linhas da tabela (as mais novas primeiro)
    const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC').all()
    res.json(tarefas)
})

// ==================== Atualizar ======================
// PUT /tarefas/5 --> Muda a tarefa de id 5 (marca como feita ou pendente)
app.put('/tarefas/:id', (req, res) =>{
    const id = req.params.id                // O numero que veio do endereço (5)
    const concluida = req.body.concluida    // 0 ou 1, enviado pela página

    // UPDATE: Alterar a linha que tem ID
    banco.prepare('UPDATE tarefas SET concluida = ? WHERE id = ?').run(concluida, id)
    res.json({ ok: true})
})

// ============ APAGAR ================
// DELETE /tarefas/5 ----> apaga a tarefa de id 5
app.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id

    // DELETE: remove a linha que tem esse id
    banco.prepare('DELETE FROM tarefas WHERE id = ?').run(id)

    res.json({ ok: true})
})

// -----------------------------------------
// PARTE 5: Ligar o servidor
// -----------------------------------------
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
