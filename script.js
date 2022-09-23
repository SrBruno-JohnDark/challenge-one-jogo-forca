localStorage.setItem("jogadasFail", 0);// dados em cache
localStorage.setItem("jogadasCorreta", 0);// dados em cache
localStorage.setItem("jogadas", 0);// dados em cache

var s1 = ['cavalo','forabozo','genocida','desgoverno','vacinas','igualdade','liberdade','oracle'];
var s1random = s1[Math.floor(Math.random()*s1.length)];
const letras = s1random.split("");

// cria as letras separadamente
let i = 0;
do {
    let div = document.createElement("div");
    div.id = "letra"+i;
    div.className = "divLetras";
    div.style.width = "2rem";
    div.style.height = "2rem";
    div.value = letras[i];
    document.getElementById("divLetrasBox").appendChild(div);
    i++;
}
while (i < s1random.length);

function letterRemove(letter) {// remove a letra clicada pelo ID
    document.getElementById(letter).style.display = "none";
}

function hangmanLetter(letter){// direciona a letra clicada para as funções
    letterRemove(letter);
    verificaJogadas(letter);
}

function verificaJogadas(letra) {// verifica a letra digitada em varios parametros
    let i = 0;
    do {
        // verifica letra por letra de s1random
        if (letra == document.getElementById("letra"+i).value) {
            document.getElementById("letra"+i).innerText = document.getElementById("letra"+i).value;
            localStorage.setItem("jogadasCorreta", parseInt(localStorage.jogadasCorreta)+1);
        }
        i++;
    }
    while (i < s1random.length);

    // aqui verifica para mandar mensagem de perdeu ou ganhou
    if (parseInt(localStorage.jogadasFail) >= 6) {
        document.getElementById("divLetrasBox").innerText = "Perdeu";
    } else if (parseInt(localStorage.jogadasCorreta) == s1random.length) {
        document.getElementById("forcaMan").innerHTML = "<center><img src='./hangmanPic/ganhou.gif' width='200'></center>";
    }

    // localStorage.setItem("jogadasFail", parseInt(localStorage.jogadasFail)+1);
    // createMan(6);
}