// Inicializa um array vazio para armazenar os dados das transações
let transactions = []
// Define uma função `createTransactionContainer` que cria um elemento `div`com a classe 'transaction' e um ID único baseado no parâmetro `id`fornecido
function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}
// Define uma função `createTransactionTitle`que cria um elemento `span`com a classe 'transaction-title' e define o conteúdo de texto para o parâmetro fornecido `name`
function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title

}
//Define uma função `createTransactionAmount` que cria um elemento `span`com a classe 'transaction-amount', formata o parâmetro fornecdio `amount`como moeda e define a classe apropriada com base no valor ser positivo ou negativo.
function createTransactionAmount(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')
    //formata o valor e define a classe apropriada com a base no sinal
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency:'BRL',
        style: 'currency',
    })
    const formatedAmount = formater.format(amount)
    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('debit')
    }
    return span
}

//Define uma função `renderTransaction`que recebe um objeto `transaction`como parâmetro, cria um contêiner de transação, título e elementos de valor, os adiciona ao DOM e renderiza a transação
function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)

    document.querySelector('#transactions').append(container)
    container.append(title, amount)
}
//Define uma função assíncrona `fetchTransactions`que busca dados de transações da URL especificada e retorna a resposta JSON parseada
async function fetchTransactions() {
    return await fetch ('http://localhost:3000/transactions').then(res => res.json())
}
//Define uma função `updateBalance`que calcula o saldo total a partir do array de transações e tualiza o conteúdo de texto do elemento de saldo
function updateBalance() {
    //calcula o saldo total e atualiza o conteúdo de texto do elemento
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long', 
        currency:'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}
//Define uma função assíncrona `setup`que inicializa a aplicação buscando transações, renderizando-as e atualizando o saldo
async function setup() {
    //Busca transações, as renderiza e atualiza o saldo
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}
//Define uma função assíncrona `saveTransaction`que lida com a submissão do formulário, salvando uma nova transação ou atualzando uma existente.
async function saveTransaction(ev) {
    //Salva ou atualiza uma transação com base na entrada do usuário
    ev.preventDefault()
    
    const id = document.querySelector('#id').value
    const name = document.querySelector('#name'. value)
    const amount = parseFloat(document.querySelector('#amount').value)

    if(id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}` , {
            method:'PUT' , 
            body: JSON.stringify({name, amount}) ,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()

    } else {
        
    

    const response = await fetch('http://localhost:3000/transactions', {
        method : 'POST',
        body: JSON.stringify({ name, amount}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
    }
    ev.target.reset()
    updateBalance()
}
// Define uma função `createeEditTransactionBtn`que cria um botão 'Editar' e configura um ouvinte de evento para preencher os campos do formulário com os dados da transação quando clicado
function createEditTransactionBtn(transaction) {
    //Cria um botão 'Editar' e configura um ouvinte de evento para popular os campos do formulário com os dados da transação
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
}
//Define uma função `createDeleteTransactionButton`que cria um botão 'Excluir' e configura um ouvinte de evento para excluir a transação associada quando clicado
function createDeleteTransactionButton(id) {
    //Cria um botão 'Excluir' e configura um ouvinte de evento para excluir a transação associada
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`https//localhost:3000/transactions/${id}`, { method: 'DELETE'})
    deleteBtn.parentElement.remove()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, i)
    updateBalance()
})
return deleteBtn
}
//Escuta o evento 'DOMContentLoaded' e chama a função `setup`quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', setup)
//Escuta o evento de submissão do formulário e chama a função `saveTransaction`quando o formulário é enviado.
document.querySelector('form').addEventListener('submit', saveTransaction)

