function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error(`arguments must be two numbers`)
    }

    return firstNumber + secondNumber
}

try {// O Try tenta executar um erro de codigo 
console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22))
console.log(sum(18, "0"))
console.log(sum(29, null))
console.log(sum(13,"zero"))   
} catch (error) { // com o "catch" ele nao para a execuçãõ do código de forma abrupta ele manda uma mensagem de erro que é escrito, o error seria o parâmetro do bloco do catch
    console.log("An error ocurred!")
    console.log(error)
}finally{ // Finally cria uma conclusão com o código sendo executado mesmo com erros
    console.log("Calculations finished")
}
