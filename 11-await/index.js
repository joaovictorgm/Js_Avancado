// Definido uma função assíncrona chamada asyncSum que aceita dois parâmetros, a e b.
async function asyncSum(a, b) {
// Verificando se ambos os parâmetros são números.
    if (typeof a !== 'number' || typeof b !== 'number') {
        // Se pelo menos um dos parâmetros não for um número, rejeita a Promise com uma mensagem de erro.
        return Promise.reject('arguments must be of type number')
    }
    // Se ambos os parâmetros forem números, retorna a soma de a e b.
    return a + b
}

//async function execute() {
    
   // asyncSum(50, 33).then(result => {
     //   console.log(result)
   // })
//}
// Para lidar com erros e usado o try e o catch
// Definido uma função assíncrona chamada execute
async function execute() {
   //Chama a função asyncSum com os argumentos 50 e 33. 
    const result = await asyncSum(50, 33)
    // Aguarda a Promise ser resolvida e, em seguida, imprime o resultado
        console.log(result)
    }

// Chamado a função execute para executar o código
execute()