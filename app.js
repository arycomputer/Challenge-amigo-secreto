//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//array que armazenará os nomes dos amigos inseridos.
let amigos = [];

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
function validaCampo(value) {
    return value == "";
}

//função adicionar nome do amigo
function adicionarAmigo() {
    //Captura o valor do campo de entrada com o uso de document.getElementById para obter o texto inserido pelo usuário.
    let amigo = document.getElementById("amigo").value.trim();
    //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    if (validaCampo(amigo)) {
        alert("Por favor, insira um nome.");
        document.getElementById("amigo").focus();
        return;
    } else {
        //adiciona o amigo ao array que armazena os nomes dos amigos usando o método .push().
        amigos.push(amigo);
        //função que adiciona o nome na lista da view
        addItemListaHtml();
        //Redefine o campo de texto para uma string vazia.
        document.getElementById("amigo").value = "";
    }
}

//função que limpa o campo lista no html, e insere todos os itens da array amigos na lista html
function addItemListaHtml() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(item => {
        lista.innerHTML += "<li> " + item + "</li>";
    });
}

//ETAPA SORTEIO DO NOME

// Validar o array amigos com no minimo 2 itens
function validaListaAmigos() {
    return amigos.length > 2;
}
//Gerar um índice aleatório 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
function sortearAmigo() {
    if (validaListaAmigos) {
        let sorteado = getRandomInt(amigos.length);
        let amigoSorteado = amigos[sorteado];
        exibeSorteado(amigoSorteado);
    } else {
        alert("Não tem amigos pra sortear.\n Insira no minimo dois amigos");
    }
}

//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
function exibeSorteado() {
    var li = document.createElement("li");
    li.innerHTML = amigoSorteado;
    li.setAttribute("id", amigos);
    document.getElementById("resultado").append(li);
}



