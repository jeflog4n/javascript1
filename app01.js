// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "Jefferson" 
let idade = 42


// Console e Debug
console.log(nome)
console.log(idade)
nome = "kurosaki" 
idade = "18"
console.log(nome,  idade)


// Tipos de dados

// text  ==  String
let cidade = "americana"

//numerico == number
let salario = 1500.35

//boleano == boolean
let fumante = false

console.log (typeof cidade)
console.log (typeof salario)
console.log (typeof fumante)




// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos ( + - / * )
console.log  ( "10 + 15" )
let n1 = 10
let n2 = 5
console.log (n1+n2)  //soma
console.log (n1-n2)  //subtração
console.log (n1*n2)  //multiplicação
console.log (n1/n2)  //divisão
console.log (n1%3 )  //resto de divisao


//     Operadores relacionais ( == != > < >= <= )
console.log (n1 == n2) //igual
console.log (n1 != n2) //diferente
console.log (n1 > n2) //maior
console.log (10 < 10 ) //menor
console.log (10 <= 10) //menor ou igual
console.log (150 >+ 175) //maior ou igual


//     Operadores lógicos  ( && || ! )
console.log (!10>2 ) //não inverte o resultado, se for verdadeiro muda pra falso, se for falso muda pra verdadeiro

console.log ( !false )

console.log (10>2 && 35<100 && n1>n2 && 100<90 ) // e - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log (10<2 || 100==150 || 57==57  ) //ou - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso se todas as verificações forem falsas


//desafio
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
// faca um que acrescente 17% ao preço e improma
precoAcrescimo = preco + preco * 0.17
console.log ("preco com acrescimo: " + precoAcrescimo.toFixed(2)) 

// faca outro que desconte 7% do preço e imprima
precoDesconto = preco - preco * 0.07
console.log ("preco com desconto: "  + precoDesconto.toFixed(2))


   
// Estrutura
//     Estrutura de controle/decisão
if(10>5){
    console.log ("10 é maior que 5")
}else{
    console.log ("10 é menor que 100")
}


let idadedoCandidato = 25   
if(idadedoCandidato >=29){
    console.log ("pode dirigir")
}else{
    console.log ("volte mais tarde")
}




let salarioFunc = 3000
//DESAFIO
// Faça um codigo que verifique se o salario do funcionario é maior 5000, se for mostre a mensagem "salario ok", se não mostre a mensagem "precisa de aumento de xx reais"

if(salarioFunc> 5000){
    console.log("salario ok")
}else{
    console.log("precisa de aumento:" + (5000 - salarioFunc) + "reais")
}


//     Laços de repetição
// quero mostrar 10 vezes a mensagem "senac americana"

let controle = 0
while(controle <= 10){ 
    console.log("senac americana")
    controle = controle + 1
}

controle = 0 
while(controle <= 100){ 
    console.log(controle )
    controle = controle + 2
}

//mostra 10 vezes "senac americana"
for(let i=1; i<=10; i=i+1){
console.log("senac americana")
}

for(let i=1; i<=50; i=i+1){
    console.log (i)
}

// Arrays 
let alunos = ["joão","paulo","renata","cris","x" ]
console.log(alunos)
console.log(alunos[2])
alunos[4] = "kleber"
console.log(alunos)
alunos.push("karem")
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍇")
frutas.push("🥝")
frutas.push("🍈")
frutas.push("🍉")
frutas.push("🍊")
frutas.push("🥥")
frutas.push("🍌")
frutas.push("🍍")
frutas.push("🥭")
console.log(frutas)



// Funções básicas
function soma(num1, num2){
       let total = num1 + num2
    console.log( " o resultado é " + total)
}

soma(100, 14)
soma(7, 3)


// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 