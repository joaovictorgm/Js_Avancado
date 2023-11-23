//Função para renderizar um artigo com base nos dados fornecidos em articleData
function renderArticle(articleData) {
    //Cria um novo elemento 'article'
    const article = document.createElement('article')
    // Adiciona a classe 'article' ao elemento article
    article.classList.add('article')
    // Define o atributo 'id' do artigo com base no id em articleData
    article.id = `article-${articleData.id}`
    //Cria um elemento 'h3' para o título
    const title = document.createElement('h3')
    // Adiciona a classe 'article-title' ao elemento título
    title.classList.add('article-title')
    // Define o conteúdo de texto do elementotítulo com base no título em articleData
    title.textContent = articleData.title
    // Cria um elemento 'div' para o conteúdo
    const content = document.createElement('div')
    // Adiciona a classe 'article-content' ao elemento conteúdo
    content.classList.add('article-content')
    // Define o conteúdo HTML do elemento conteúdo com base no conteúdo em articleData
    content.innerHTML = articleData.content
    // Cria um elemento 'div' para o autor
    const author = document.createElement('div')
    // Adiciona a classe 'article-author' ao elemento autor
    author.classList.add('article-author')
    // Define o conteúdo de texto do elemento autor com base no autor em articleData
    author.textContent = articleData.author
    // Adiciona os elementos título, autor e conteúdo ao artigo
    article.append(title, author, content)
    // Adiciona o artigo ao elemento com id 'articles' no DOM
    document.querySelector('#articles').appendChild(article)
}
// Função para buscar artigos do servidor
async function fetchArticles() {
    // Busca artigos na URL especificada
    const articles = await fetch ("http://localhost:3000/articles").then(res => res.json())
    // Para cada artigo, chama a função renderArticle
    articles.forEach(renderArticle)
}
// Evento de escuta para o evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () =>{
    // Chama a função fetchArticles quando o DOM estiver completamente carregado
    fetchArticles()
})
// Obtém o elemento de formuário do DOM
const form = document.querySelector('form')
// Evento de escuta para o evento de envido do formulário
form.addEventListener('submit', async (ev) => {
    //Impede o comportamento padrão de envio do formulário
ev.PreventDefault()
    //Cria um objeto com os dados do artigo com base nos valores de entrada do formulário
const articleData = {
    title: document.querySelector('#title'). value,
    author: document.querySelector('#author').value,
    content: document.querySelector('#content').value
}
// Envia uma requisição POST para o servidor com articleData em formato JSON
const response = await fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
})
//Analisa o JSON de resposta para obter os dados do artigo salvo
const savedArticle = await response.json()
// Reseta os campos de entrada do formulário
form.reset()
// Chama a função renderArticle para exibir o artigo salvo
renderArticle(savedArticle)
// Registra os dados do artigo salvo no console
console.log(savedArticle)
})