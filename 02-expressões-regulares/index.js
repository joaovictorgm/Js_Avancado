// Define a função construtora PhoneNumber que recebe uma string phoneNumberString como entrada
function PhoneNumber(phoneNumberString) {
// Remove todos os espaços em branco e caracteres alfabéticos da string
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
// Extrai o código do país usando uma expressão regular.
// O código do país é qualquer sequência de dígitos que segue um "+"
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
// Extrai o DDD usando uma expressão regular
// O DDD é qualquer sequência de dígitos que está entre parênteses "()".
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)
// Extrai o número de telefone.
//O número de telefone é qualquer sequência de dígitos que segue um ")".
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}
// Cria uma instância de PhoneNumber com uma string de número de telefone e imprime no console.
console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
console.log(new PhoneNumber('+1 (55) as555-999-8888'))