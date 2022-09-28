localStorage.setItem("jogadasLength", "");// dados em cache
localStorage.setItem("jogadasFail", 0);// dados em cache
localStorage.setItem("jogadasCorreta", 0);// dados em cache
localStorage.setItem("jogadas", 0);// dados em cache
localStorage.setItem("jogadasFailCount", 0);// dados em cache

var s1 = ['cavalo','caramelo','camelo','vermelho','vacina','igualdade','liberdade','oracle','cogumelo','mundo','javascript'];
var s1random = s1[Math.floor(Math.random()*s1.length)];
const letras = s1random.split("");

// cria as letras separadamente
let i = 0;
do {
    let div = document.createElement("div");
    div.id = `letra${i}`;
    div.className = "divLetras";
    div.style.width = "2rem";
    div.style.height = "2rem";
    div.value = letras[i];
    document.getElementById("divLetrasBox").appendChild(div);
    i++;
}
while (i < s1random.length);
// cria as letras separadamente - end
// remove a letra clicada pelo ID
function letterRemove(letter) {
    document.getElementById(letter).style.display = "none";
}
// remove a letra clicada pelo ID - end
// direciona a letra clicada para as funções
function hangmanLetter(letter){
    letterRemove(letter);
    localStorage.setItem("jogadasFail", 0);
    verificaJogadas(letter);
    jC();
}
// direciona a letra clicada para as funções - end
// contagem de jogadas
function jC() {
    document.getElementById("jogadas").innerText = parseInt(localStorage.jogadas);
}
// contagem de jogadas - end
// verifica a letra digitada em varios parametros
function verificaJogadas(letra) {
    localStorage.setItem("jogadas", parseInt(localStorage.jogadas)+1);
    let i = 0;
    do {
        if (letra == document.getElementById("letra"+i).value) {
            document.getElementById("letra"+i).innerText = document.getElementById("letra"+i).value;            
            localStorage.setItem("jogadasLength", localStorage.jogadasLength+letra)
        } 
        if (letra != document.getElementById("letra"+i).value) {
            localStorage.setItem("jogadasFail", parseInt(localStorage.jogadasFail)+1);
        }
        i++;
    }
    while (i < s1random.length);

    if (localStorage.jogadasLength.length == s1random.length) {
        document.getElementById("forcaMan").innerHTML = `
        <center><img src='./hangmanPic/ganhou.gif' width='200'></center>`;
        document.getElementById("palavra").innerHTML = `
        <a class="perdeu">Uhuull</a>
        <br>
        <button class='reiniciar' id='reiniciar'>REINICIAR</button>`;
        document.getElementById("reiniciar").addEventListener("click", function() {
            location.reload();
        });
    } else if(parseInt(localStorage.jogadasFail) == s1random.length) {
        localStorage.setItem("jogadasFailCount", parseInt(localStorage.jogadasFailCount)+1)
        createMan(parseInt(localStorage.jogadasFailCount));
    }
    if (parseInt(localStorage.jogadasFailCount) == 6) {
        document.getElementById("palavra").innerHTML = `
        <a class="perdeu">Perdeu</a>
        <br>
        <button class='reiniciar' id='reiniciar'>REINICIAR</button>`;
        document.getElementById("reiniciar").addEventListener("click", function() {
            location.reload();
        });
    }
}
// verifica a letra digitada em varios parametros -end