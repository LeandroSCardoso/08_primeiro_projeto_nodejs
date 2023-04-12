//importando as funções de arquivo externo
const ModCalculadora = require("./calculadora")

//Passando valores para variaveis
const pNumeroUm = 10
const pNumeroDois = 20


//processamento - chamando as funcoes e guardando em variaveis
const retornoDaSoma = ModCalculadora.soma(pNumeroUm, pNumeroDois)
const retornoDaSubtracao = ModCalculadora.subtracao(pNumeroUm, pNumeroDois)
const retornoDaMultiplicacao = ModCalculadora.multiplicacao(pNumeroUm, pNumeroDois)

//mostrando os resultados
console.log(retornoDaSoma)
console.log(retornoDaSubtracao)
console.log(retornoDaMultiplicacao)
