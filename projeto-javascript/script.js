// Capturando os elementos criados no HTML
var titulo = document.getElementById("titulo");
var listaNaoOrdenada = document.getElementById("lista-nao-ordenada");
var link = document.getElementById("link");
var listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo textual aos elementos h1 e a
titulo.innerText = "Título da Página";
link.innerText = "Link para Proz Educação";

// Adicionando itens à lista não ordenada usando a propriedade innerHTML
listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

// Adicionando itens à lista ordenada com links para outros sites usando innerHTML
listaOrdenada.innerHTML = "<li><a href='https://www.example.com'>Link 1</a></li><li><a href='https://www.example.com'>Link 2</a></li><li><a href='https://www.example.com'>Link 3</a></li>";
