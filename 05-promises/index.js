// pendente - pending
// resolvido - resolved
// rejeitado - rejected
//const p = new Promise ((resolve, reject) => {
    //console.log('A promise esta sendo executada')
    //setTimeout(() => {
       // if (true) {
           // reject(false)
       // }
       // console.log('Resolvendo a promise...')
 //resolve(true)
   // },1000 * 2)
   
//})

//console.log(p)


// Declaração de uma função chamada 'execute'
function execute() {
    // A função 'exwcute' retorna uma nova Promise
    return new Promise((resolve, reject) => {
       // Imprime uma mensagem no console quando a Promise é criada
        console.log('A promise está sendo executado...')

        // Cria um temporizador que resolve a Promise após 3 segundos
        setTimeout(() => {
        // Imprime uma mensagem no console quando a Promise é resolvida
            console.log('Resolvendo a promise')
        // Resolva a Promise com o valor 'Resultado'
            resolve('Resultado')
        }, 3 * 1000) // O temporizador é configurado para 3 segundos (3000 milissegundos)
    })
}

// Chama a função 'execute' e armazena a Promise resultante na variável 'p' 

const p = execute()
//Imprime a variável 'p' no console (neste ponto, 'p' é ima Promise pendente)
 console.log(p)
// Cria um temporizador que imprime novamente a variável 'p' após 5 segundos
setTimeout(() => {
    console.log(p)
}, 5 * 1000) // O temporizador é configurado para 5 segundos (5000 milissegundos)

