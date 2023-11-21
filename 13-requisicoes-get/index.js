//Função que ria eexibeum artão para um país na página
function createCountryCard(country) {
    //Cria um elemento <div> para representar o cartão do país 
    const card = document.createElement('div')
    card.classList.add('country')
    //Obtém o nome do país a partir da propriedade 'name.common' do objeto 'country'
    const countryName = country.name.common
    // Cria um elemento <h2> para o nome do país e atribui o texto correspondente
    const name = document.createElement('h2')
    name.textContent = countryName
    //Cria um elemento <img> para a bandeira do país e define o src e alt correspondentes
    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName
    // Adiciona os elementos de nome e bandeira ao cartão
    card.append(name, flag)
    // Adiciona o cartão à lista de países na página
    document.querySelector('#countries').append(card)

}
    //Função assíncrona que obtém a lista de países da API
async function getCountries() {
    // Faz uma requisição assíncrona para a API de países
    const response = await fetch('https://restcountries.com/v3.1/all')
    // Converte a resposta para o formato JSON
    const countries = await response.json()
    //Exibe no console a lista de países obtida da API
    console.log(countries)
    //Para cada país na lista, chama a função 'createCountryCard' para criar um cartão e exibi-lo na página
    countries.forEach(createCountryCard)
}
// Chama a função 'getCountries' para iniciar o processo de obtenção e exibição dos países na página
getCountries()