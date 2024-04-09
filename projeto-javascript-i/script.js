// Método simples para adicionar o título
document.getElementById('titulo').innerHTML = "<h1>Bem-vindo à Loja Online</h1>";

// Método complexo para adicionar um produto
const produto = document.createElement('div');
produto.classList.add('produto'); // Adiciona uma classe ao elemento

const nome = document.createElement('h2');
nome.textContent = "Produto A"; // Define o texto do elemento

const descricao = document.createElement('p');
descricao.textContent = "Descrição do Produto A"; // Define o texto do elemento

const preco = document.createElement('p');
preco.textContent = "R$ 50,00"; // Define o texto do elemento

// Adiciona os elementos filhos ao elemento produto
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

// Adiciona o elemento produto ao corpo do documento
document.body.appendChild(produto);
