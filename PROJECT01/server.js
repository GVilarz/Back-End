// Cronômetro no terminal 

// =========================================
// Bloco 01: Preparando o terminal
// =========================================
// require = "traga para cá uma ferramenta pronta!"
// readline = "é a ferramenta do Node que sabe conversar com o teclado"
const { log } = require('console')
const readline = require('readline')

// process.stdin = a entrada do programa (teclado)
// esta linha manda o node avisar o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

// Mensagem de boas-vindas
console.log('⏱️ Cronômetro iniciado!')
console.log('p = pausar/continuar | r = resetar | Ctrl + C = Sair')

// ===================================== 
// Bloco 02: A memória do cronômetro 
// =====================================
// tempo guarda QUANTOS SEGUNDOS já se passaram
let tempo = 0

// Rodando é um interrupitor de luz: true = contando, false = pausado
let rodando = true

// =========================================
// Bloco 03: Deixando o tempo bonito (mm:ss)
// =========================================

function formatar(total){
    // math.floor arredonda um número para baixo, sempre retornando um número inteiro
    // Exemplo: 65/60 = 1.08... -> Math.floor joga fora os decimais -> 1
    const min = Math.floor(total / 60)
    
    // o simbolo % da o resto da divisão
    const seg = total % 60
    
    // String (...) transformar o número em texto
    // padStart (2, 0) = "Se tiver menos de 2 caracteres, complete com 0 na frente"
    // Assim "5" vira "05", depois nós juntamos os pedaços com o ":"
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0')
}

// =========================================
// Bloco 04: O coração do programa
// =========================================

// setInterval = "repita isso a cada X milissegundos"
// 1000 milisegundos = 1 segundo (veja o numero no final do bloco)
setInterval(() => {
    // Só conta se o interruptor estiver ligado
    if (rodando) {
        // Soma 1 em tempo. É o mesmo que: tempo = tempo + 1
        tempo ++;
        // limpa a tela para o número "Mudar no mesmo lugar"
        console.clear();
        console.log('⏱️' + formatar(tempo))
    }
}, 1000)

// =========================================
// Bloco 05: Ouvindo o teclado
// =========================================

process.stdin.on('keypress', (letra, tecla) => {
    if (tecla.name === 'p') {
        // O ! Inverte o valor: true vira false, false vira true
        rodando = !rodando;
        // Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
        // é um if de uma linha só
        console.log(rodando ? '▶️ Continuando': '⏸️ Pausado')

    // Senão, foi a tecla R?
    } else if (tecla.name === 'r') {
        tempo = 0
        console.clear()
        console.log('⏱️' +  formatar(tempo))
        console.log(' Resetado')

    } else if (tecla.ctrl && tecla.name === 'c') {
        console.log('\n Até mais!');
        process.exit()
    }
})