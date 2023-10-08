console.log("Programa iniciado!")

 //const timeoutId = setTimeout(() => {
// console.log("3 segundos se passaram desde que o program foi iniciado")
//}, 1000 * 3)

//clearTimeout(timeoutId)

let seconds = 0 
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 60) {
        clearInterval(intervalId)
        console.log("Passou um minuto. Encerrando...")
    }
}, 1000 * 3)