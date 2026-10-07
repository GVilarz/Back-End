// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO

Ficha Fisica:          JSON:
Nome: João             "nome": "João"
Idade: 25              "idade": 25
Cidade: SP             "cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)


<!-- ======================================= -->
{
    "cachorro":{
        "nome": "Rex",
        "idade": 3,
        "raca": "labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "119999999967"
        }
    }
}
<!-- ======================================= -->
Explicação
<!-- ======================================= -->
// STRING (texto) - Sempre com aspas
"nome": "Rex"

// NUMBER (Número) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false)
"vacinado": true,

// ARRAY (Lista) - Com conlchetes
"brinquedos": ["bola", "osso", "frisbee"]

// OBJECT (Objeto) - Com chaves 
"dono": {
            "nome": "João",
            "telefone": "119999999967"
        }
// NULL (vazio)
"dataFalecimento": null