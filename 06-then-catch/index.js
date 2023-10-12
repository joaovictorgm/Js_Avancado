// Declaração de uma função chamada 'execute
function execute() {
    // A função 'execute' retorna uma nova Promise
     return new Promise((resolve, reject) => {
         // Imprime uma mensagem no console quando a Promise é criada
        console.log('A promise está sendo executada...')

        // Cria um temporizador que executa o código dentro dele após 2 segundos (1000 * 2 milisegundos)
        setTimeout(() => {
        // Aqui é feita uma verificação condicional (neste caso, sempre será verdadeira)
            if (true) {
        // Se a condição for verdadeira, a Promise é rejeitada com a mensagem 'a promise foi rejeitada'
                reject('a promise foi rejeitada')
            } else {
        // Se a condição for falsa, a Promise é resolvida com o valor 42
               console.log('Resolvendo a promise...')
               resolve(42) 
            }
            
        }, 1000 * 2 )// O temporizador é configurado para 2 segundos (2000 milisegundos)
    })
}
        // Chama a função 'execute' e encadeia o método 'then' para tratar o sucesso da Promise
        execute().then((result) => {
        //Imprime uma mensagem no console quando a Promise é resolvida, incluindo o valor resolvido (result)
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
        //Encadeia o método 'catch' para tratar a rejeição da Promise e imprime uma mensagem de erro (err)
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
        // Encadeia o método 'finally' para executar código após a resolução ou rejeição da Promise
    console.log('A promise foi finalizada.')
})