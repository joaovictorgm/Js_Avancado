// Definindo uma função chamada 'imc' que calcula o Índice de Massa Corporal (IMC) usando Promises.
function imc(weight,height) {
    return new Promise((resolve, reject) => {
        // Verificando se 'weight' e 'height' são números; caso contrário, rejeita a Promise
        if (typeof weight !== 'number' || typeof height !== 'number')
        reject('arguements must be of type number')
        else
        // Calcula o IMC e resolve a Promise com o resultado.
          resolve(weight / (height * height))
    })
}
       //Definindo uma função chamada 'showImc' que usa a função 'imc' para calcular e exibir o IMC.
function showImc(weight, height) {
        //Chama a função 'imc' com os argumentos 'weight' e 'height' e lida com Promises usando 'then' e 'catch'
    imc(weight, height).then((result) => {
        // Exibe o resultado do IMC
        console.log(`O resultado do IMC foi de ${result}.`)
        // Com base no resultado do IMC, imprime uma mensagem de situação.
        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação:NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        // Em caso de erro na Promise, exibe uma mensagem de erro.
            console.log(err)
        })
        //Imprime uma mensagem indicando que o cálculo do IMC está em andamento. 
     console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}
// Chamando a função 'showImc' com vários conjuntos de peso e altura
showImc(71, 1.74)
showImc(48, 1.86)
showImc(72, "abc") //Este caso possui uma altura inválida (não é um número)
showImc(80, 1.60)
