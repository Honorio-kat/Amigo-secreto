//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigos = document.getElementById('amigo');
    if (nomeAmigos.value.trim() === "") {
        alert('Por favor, digite um nome');
        return;
    }
    // Verificação de nomes.
    if (listaDeAmigos.includes(nomeAmigos.value)) {
        alert('Nome já está na lista');
        return;
    }
    listaDeAmigos.push(nomeAmigos.value);
    clearInput();
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = listaDeAmigos.join(' ');
    console.log(listaDeAmigos);
}

// Função para limpar campo de inserção.
function clearInput() {
    let nomeAmigos = document.getElementById('amigo');
    nomeAmigos.value = "";
}

// Função de sorteio de amigo.
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Não existe nome na lista para sortear");
        return;
    }
    // Sortear um nome da lista de amigos.
    let nomeSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let exibeSorteio = document.getElementById('resultado');
    // Limpa a lista de nomes antes do sorteio.
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    // Exibe o nome sorteado.
    exibeSorteio.innerHTML = `O seu amigo secreto sorteado é ${nomeSorteado}`;
    clearInput();
}
