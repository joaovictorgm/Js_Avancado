//Define uma função chamada asyncSum que aceita dois argumentos a e b
//function asyncSum(a,b) {
  // Retorna uma promessa (Promise) que pode ser resolvida ou rejeitada.
   // return new Promise((resolve, reject) => {
     // Verifica se a e b são do tipo número.
       // if (typeof a !== 'number' || typeof b !== 'number') {
         // Se algum dos argumentos não for um número, a promessa é rejeitada com uma mensagem de erro.
           // reject('arguments must be of type number')
        //} else {
          // Se ambos os argumentos forem números, a promessa é resolvida com a soma de a e b
          //  resolve(a + b)
       // }
   // })
//}
// Define uma função chamada asyncSubtract que aceita dois argumentos a e b.
//function asyncSubtract(a, b) {
  // Retorna uma promessa (Promisse) que pode ser resolvida ou rejeitada
  //  return new Promise((resolve, reject) => {
    // Verifica se a e b são do tipo número
    //    if (typeof a !== 'number' || typeof b !== 'number') {
    //reject('arguments must be of type number')
      //  } else {
        // Se ambos os argumentos forem números, a promessa é resolvida com a subtração de a e b
        //    resolve(a - b)
        //}
    //})
//}
//Chama a função asyncSum com os argumentos 50 e 33 e armazena o resultado em sumResult
//const sumResult = asyncSum(50, 33)
//Chama a função asyncSubtract com os argumentos 50 e 7 e armazena o resultado em subtractResult
//const subtractResult = asyncSubtract(50, null)
// Executa ambas as promessas asyncSum e asyncSubtract em paralelo.
//Promise.all([sumResult, subtractResult]).then(results => {
  //Quando ambas as promessas são resolvidas com sucesso, este bloco é executado e imprime os resultados no console
  //  console.log(results)
//}).catch(err=> {
  //Se ocorrer um erro em qualquer uma das promessas, este bloco é executado e imprime o erro no console.
  //  console.log(err)
//})
// Define um array chamado numbers com vários números
const numbers = [4, 9, 5, 13, 77]
// Define uma função chamada asyncSquare que aceita um argumento x
function asyncSquare(x) {
  // Retorna uma promessa (Promise) que pode ser resolvida ou rejeitada
    return new Promise ((resolve, reject) => {
    // Verifica se x é do tipo número
        if (typeof x !== 'number'){
          // Se x não for um núero. a promessa é rejeitada
        reject(false)
        } else {
        resolve(x * x)
        }
       
    })
}
//Executa a função asyncSquare para cada número no array numbers e armazena as promessas resultantes em um array.
Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  // Quando todas as promessas são resolvidas com sucesso, este bloco é executado e imprime os quadrados no console.
    console.log(squares)
}).catch|(err => {
  // Se ocorrer um erro em qualquer uma das promessas, este bloco é executado e imprime o erro no console.
    console.log(err)
})