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
        alert("Nome valido " + amigo);
        //adiciona o amigo ao array que armazena os nomes dos amigos usando o método .push().
        amigos.push(amigo);
        addItemListaView();
        document.getElementById("amigo").value = "";
    }
}






//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
