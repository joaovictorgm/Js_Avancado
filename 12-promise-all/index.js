// Esta função retorna uma Promise que será resolvida após o número de segundos especificados
function waitFor(seconds) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}
// Um array de números
const numbers = [4, 7 , 99, 43]
// Função assíncrona chamada 'execute'
async function execute() {
    // Inicia um temporizador para medir o tempo de execução da parte do 'map'
    console.time('map')
    // Usa Promise.all para esperaraté que todas as Promises no array 'numbers.map' sejam resolvidas
 const squares = await Promise.all(numbers.map(async (number) => {
     // Espera 2 segundos antes de continuar para simular um atraso assíncrono
    await waitFor(2)
    // Retorna o quadrado de cada número
    return number * number   
}))
// Imprime o array resultante contendo os quadrados dos números.
console.log(squares)

}
// Chama a funçõa 'execute'
execute()