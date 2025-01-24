//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array que armazenará os nomes dos amigos inseridos.
let amigos = [];

//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
let campoEntrada = document.getElementById("amigo");

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
function validaCampo(valor){
return valor==="";
}

function adicionarAmigo(){
    let nomeAmigo = campoEntrada.value.trim();
    //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    if(validaCampo(nomeAmigo)){
        alert("Preencha o nome");
        return;
       }else{
        //adiciona o amigo ao array que armazena os nomes dos amigos usando o método .push().
           amigos.push(nomeAmigo);
           addItem();
           campoEntrada.value="";
       }
}

function addItem(){
alert(amigos.length);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    amigos.forEach(item => {
        lista.innerHTML +="<li> "+ item+"</li>";
    })
}




//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.