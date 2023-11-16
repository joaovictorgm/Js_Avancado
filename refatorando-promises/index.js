// Função que calcula o IMC  e retorna uma Promise.
async function calculateImc(weight, height) {
        //Verifica se os argumentos são do tipo número.
        if (typeof weight !== 'number' || typeof height !== 'number') {
            return Promise.reject('arguments must be of type number')
            // Se não forem, rejeita a Promise com uma mensagem de erro.
        } else {
            // Se forem, resolve a Promise com o cálculo do IMC
            return weight /  (height * height)
        }
    }


// Função assíncrona que exibe o resultado do IMC
async function showImc(weight, height) {
    try {
          // imprime uma mensagem indicando que o cálculo do IMC está em andamento
        console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
        //Chama a funçõa 'calculateImc' usando 'await1 para esperar a resoluçõa da Promise 
        const result = await calculateImc(weight, height)
        
        // Imprime o resultado do IMC
        console.log (`O resultado do IMC é ${result}`)

        // Determina a situação com base no resultado do IMC.
        if(result< 18.5) {
            console.log('Situação: MAGREZA')
        } else if (result < 25) {
            console.log('Situaçõa: NORMAL')
        } else if (result < 30) {
            console.log('Situação: SOBREPESO')
        } else if (result < 40) {
            console.log('Situação: OBESIDADE')
        } else {
            console.log('Situaçõa: OBESIDADE GRAVE')
        }
    } catch (err) {
       // Em caso de erro na Promise, exibe uma mensagem de erro
       console.log(err)
    }
  
   
}

//Chamando a funçõa 'showImc' com vários conjuntos de peso e altura
showImc(71, 1.74)
showImc(48, 1.86)
showImc(72, "abc")
showImc(80,1.60)