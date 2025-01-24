//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//array que armazenará os nomes dos amigos inseridos.
let amigos = [];

//Captura o valor do campo de entrada com o uso de document.getElementById para obter o texto inserido pelo usuário.
let campoEntrada = document.getElementById("amigo").value.trim();

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
function validaCampo(valor){
return valor==="";
}

// função que adiciona o nome se valido
function adicionarAmigo(){
   // let nomeAmigo = campoEntrada;
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





//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
