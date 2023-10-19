//A função `checkAge` aceita um parâmetro ´age`e retorna uma Promise. Ela verifica se a idade é fornecida.Se for, resolve a Promise com um valor booleano indicando se a idade é maior que 18. Caso contrário, rejeita a Promise com um erro indicando que a idade é necessária
function checkAge (age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}
// A função `getAge`aceita um parãmetro `birthday`e retorna uma Promise. Ela verifica se a data de nascimento é fornecida. Se for, calcula a idade subtraindo o ano de nascimento do ano atual e resolve a Promise com o valor da idade. Caso contrário, rejeita a Promise com um erro indicando que a data de nascimento é necessária.
function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if(birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}
//Essa parte comentada do código demonstra como usar essas funções para calcular e verificar a idade de uma pessoa a partir de sua data de nascimento. A versão não comentada do código utiliza encadeamento de Promises para tornar o código mais legível.
//getAge('2009-09-02').then(age => {
    //checkAge(age).then(isOver18 => {
        //if (isOver18) {
            //console.log('Maior de 18 anos')
       // } else {
           // console.log('Menor de 18 anos')
       // }
    //}).catch(err => {
        //console.log(err.message)
    //})
//}).catch(err => {
    //console.log(err.message)
//})

//Encadeamento

getAge('2000-09-07')
.then(age => {
    return checkAge(age)
})
.then(isOver18 => {
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
})

.catch(err => {
    console.log(err.message)
})

// Fluxo do código
//1. `getAge`('2000-09-07') `é chamado para calcular a idade com base na data de nascimento fornecida('2000-09-07').Esta Promise irá resolver com a idade.
//2. A função `.then(age => {...}) `é encadeada para lidar com o resultado da Promise anterior. Ela recebe a idade como um parâmetro e chama `checkAge(age)` para verificar se a pessoa é maior de 18 anos.
//3. A Promise resultante de `checkge(age)` resolverá com um valor booleano indicando se a pessoa é maior de 18 anos ou não. Isso é armazenado na variável `isOver18`
//4. Em seguida, a função `.then(isOver18 => {...})` é encadeada para verificar o valor de `isOver18` e exibir a mensagem apropriada com base nesse valor.
//5. Se algo der errado em qualquer etapa das Promises, o bloco `.catch(err => {...})`será adicionado para lidar com o erro e exibir uma mensagem de erro.


