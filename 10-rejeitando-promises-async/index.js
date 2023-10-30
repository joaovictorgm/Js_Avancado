// Quando a função é async, o javascript entende que tem que retorna uma promise
//Aqui,definimos duas funções assíncronas que retornam a soma e a subtração de dois números.
async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        //utilizando a possibilidade de rejeitar a promise
        return Promise.reject('arguments must be of type number')
    }
    return a + b // A função retorna uma promessa que resolve para a soma de 'a' e 'b'. 
 }

async function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        // Utilizando a possibilidade de rejeitar a promises
    return Promise.reject('arguments for subtraction  must be of type number')
    }
     return a - b // A função retorna uma promessa que resolve para a subtração de 'a' e 'b'
 }
 // Chamamos as funções assíncronas 'asyncSum' e 'asyncSubtract' com argumentos.
 //No entanto, essas chamadas não retornam os resultados diretamente, mas sim promessas.
 const sumResult = asyncSum(50, 28)
 const subtractResult = asyncSubtract(50, null)
 // Criamos um array de números
const numbers = [4, 6, 9, 1, 13]
//Aqui, definimos uma função assíncrona que retorna o quadrado de um número.
async function asyncSquare(x) {
// A função retorna uma promessa que resolve para o quadrado de 'x'
    return x * x
}
// Usamos 'Promise.all' para esperar que todas as promessas sejam resolvidas
// No entanto, 'sumResult' e 'subtractResult' já foram chamados anteriormente e estão resolvidos
 Promise.all([sumResult, subtractResult]).then(results => {
     console.log(results) // Exibe um array com os resultados da soma e subtração
 }). catch(err => {
     console.log(err)
 })