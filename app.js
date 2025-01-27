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
    let amigo = capitalize(document.getElementById("amigo").value.toLowerCase());
    //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    if (validaCampo(amigo)) {
        alert("Por favor, insira um nome.");
        exibeMensagemErro();
        document.getElementById("amigo").focus();
        return;
    } else if (existeAmigo(amigo)) {
        alert("Nome existe na lista. Altere o nome.");
        document.getElementById("amigo").select();

    }
    else {
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
    return amigos.length >= 2;
}
//Gerar um índice aleatório 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
function sortearAmigo() {
    if (validaListaAmigos()) {
        let indiceSorteado = getRandomInt(amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        exibeSorteado(amigoSorteado);
    } else {
        alert("Não tem amigos pra sortear.\n Insira no minimo dois amigos");
    }
}

//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
function exibeSorteado(amigoSorteado) {
    document.getElementById("resultado").innerHTML = "";
    var li = document.createElement("li");
    li.innerHTML = "O amigo sorteado foi : " + capitalize(amigoSorteado);
    li.setAttribute("id", amigos);
    document.getElementById("resultado").append(li);
}

//ETAPA PERSONALIZAÇÃO DO CODIGO

//função que retorna apenas letras,incluindo acentução e espaço, ignorando numeros e outros caracteres
function isLetter(letra) {
    return /^[A-Za-zÀ-ú\s]+$/.test(letra);
}

//funçao capitalizar texto 
function capitalize(texto) {
    //const s2 = texto.trim().split(/\s+/).join(" ");
    let arrayTexto = texto.split(/\s+/);
    let capitalized;
    let strTratada = [];
    arrayTexto.forEach(str => {
        //let regex  = /(\s+D{1}(A|E|I|O|U){1}[S]?){1,3}/i;
        const regex = /\bd(a|e|i|o|u)[s]?$/i;
        if (!regex.test(str)) {
            capitalized = str.charAt(0).toUpperCase() + str.slice(1);
            strTratada.push(capitalized);
        } else {
            capitalized = str.toLowerCase();
            strTratada.push(capitalized);
        }
    });
    return strTratada.join(" ");
}

//função pra nao repetir nomes
function existeAmigo(amigo) {
    return amigos.includes(amigo);
}

function exibeMensagemErro(){
    var x = document.getElementById("msgErro");
    x.classList.add("animation");
    x.style.visibility = "visible";
  // document.getElementById("msgErro").style.visibility = "hidden";

   // x.classList. ("display","none");
   // x.style.visibility = "hidden";
    //x.classList.toggle("hidden");
   // document.getElementsById("msg").classList.toggle("visible");
}
