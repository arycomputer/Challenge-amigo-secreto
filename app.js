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
        addItemListaView();
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
    })
}






