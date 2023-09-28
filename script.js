var user = document.querySelector("#user");
var bot = document.querySelector("#bot");
var result_ = document.querySelector("#result");
var placar_b = document.querySelector("#cnt_b");
var placar_u = document.querySelector("#cnt_u");
var ganhador = document.querySelector("#ganhador");
var box_v = document.querySelector("#box_vencedor");
var receptor_b, recptor_u, contador_b = 0, contador_u = 0;
function resp(){
    const numeroAleatorio = Math.floor(Math.random() * 3);
    receptor_b = numeroAleatorio;
    resultado();
    if(receptor_b === 0){
        bot.innerHTML = "👊🏻";
    }
    else if(receptor_b === 1){
        bot.innerHTML = "🤚🏻";
    }
    else if(receptor_b === 2){
        bot.innerHTML = "✌🏻";
    }
    if(recptor_u === 0){
        user.innerHTML = "👊🏻";
    }
    else if(recptor_u === 1){
        user.innerHTML = "🤚🏻";
    }
    else{
        user.innerHTML = "✌🏻";
    }
    
    placar_b.innerHTML =  contador_b;
    placar_u.innerHTML =  contador_u;
}

function resultado(){
const comp_u = recptor_u;
const comp_b = receptor_b;
if(comp_u === comp_b){
    ///empate
    ganhador.innerHTML = "Empate";
    box_vencedor.style.background = "rgb(251, 150, 64)";
}
else if(comp_u === 0 && comp_b === 1){
    contador_b++; /// papel ganha de pedra
    ganhador.innerHTML = "Perdeu";
    box_vencedor.style.background = "red";
}
else if(comp_u === 1 && comp_b === 0){
    contador_u++; /// papel ganha de pedra
    ganhador.innerHTML = "Vencedor";
    box_vencedor.style.background = "rgb(85, 176, 108)";
}
else if(comp_u === 1 && comp_b === 2){
    contador_b++; /// papel perde para tesoura
    ganhador.innerHTML = "Perdeu";
    box_vencedor.style.background = "red";
}
else if(comp_u === 2 && comp_b === 1){
    contador_u++; /// papel perde para tesoura
    ganhador.innerHTML = "Vencedor";
    box_vencedor.style.background = "rgb(85, 176, 108)";
}
else if(comp_u === 2 && comp_b === 0){
    contador_b++; /// tesoura perde de pedra
    ganhador.innerHTML = "Perdeu";
    box_vencedor.style.background = "red";
}
else{
    contador_u++; /// tesoura perde de pedra
    ganhador.innerHTML = "Vencedor";
    box_vencedor.style.background = "rgb(85, 176, 108)";
}
}
function pedra(){
    recptor_u = 0;
    resp();
}
function papel(){
    recptor_u = 1;
    resp();
}
function tesoura(){
    recptor_u = 2;
    resp();
}
