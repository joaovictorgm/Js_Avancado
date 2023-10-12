//Função que calcula o IMC e retorna uma Promise
async function calculateIMC(weight, height){
    // Verifica se os parâmetros são números
    if (typeof weight !== 'number' || typeof height !=='number') {
    // Se um dos parâmetros não for um número, rejeita a Promise
        throw new Error('Peso e altura devem ser números')
    }

    // Calcula o IMC
    const imc = weight / (height * height)
    //Retorna o resultado como uma Promise resolvida
    return imc
}

//Função que exibe o resultado do IMC e sua situação no terminal
    function showIMCResult(weight, height) {
        calculateIMC(weight, height).then((imc) => {
            //Mostra o resultado do IMC
            console.log('IMC calculado:', imc)
            //Determina a situação do IMC
            if (imc < 18.5) {
                console.log('Situação:Magreza')
            } else if (imc >= 18.5 && imc < 25) {
                console.log('Situação: Normal')
            } else if (imc >= 30 && imc < 40) {
                console.log('Situação: Obesidade')
            } else {
                console.log('Situação: Obesidade Grave')
            }

            //Exibe uma mensagem para evidenciar o funcionamento assíncrono
            console.log('Cálculo de IMC concluído')
        })
        .catch((error) => {
            // Em caso de erro na Promise, exibe a mensagem de erro no terminal
            console.error('Erro:', error.message)
        })
    }

    showIMCResult(93,1.79)
    showIMCResult('aaa', 1,89)