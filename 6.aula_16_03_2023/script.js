
let vez = 0;
let jogadas = 0;
let vitoria = false;
let display = document.querySelector('#resultado h1');

function msg(texto){
    display.innerHTML = texto;
}

function marcarCasa(){
    let casa = event.target;
    if(vitoria == false){
        if (!casa.classList.contains('bola') && !casa.classList.contains('xis') && jogadas <= 9){
            if(vez == 0){
                casa.classList.add("bola");
                casa.setAttribute("valor",0);
                vez = 1;
            }else{
                casa.classList.add("xis");
                casa.setAttribute("valor",1);
                vez = 0;
                jogadas ++;
            }
        }else{
            if(jogadas == 9){
                msg('Empate');
            }else{
                msg('Casa Indisponível');
            }
        }
        checkVitoria();
    }else{
        msg('Fim de jogo');
    }
}

function checkVitoria(){
    let c1_valor = c1.getAttribute("valor");
    let c2_valor = c2.getAttribute("valor");
    let c3_valor = c3.getAttribute("valor");
    let c4_valor = c4.getAttribute("valor");
    let c5_valor = c5.getAttribute("valor");
    let c6_valor = c6.getAttribute("valor");
    let c7_valor = c7.getAttribute("valor");
    let c8_valor = c8.getAttribute("valor");
    let c9_valor = c9.getAttribute("valor");
    
    if(c1_valor==c2_valor&&c3_valor==c2_valor&&c3_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c4_valor==c5_valor&&c5_valor==c6_valor&&c6_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c7_valor==c8_valor&&c8_valor==c9_valor&&c9_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c1_valor==c4_valor&&c4_valor==c7_valor&&c7_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c2_valor==c5_valor&&c5_valor==c8_valor&&c8_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c3_valor==c6_valor&&c6_valor==c9_valor&&c9_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c1_valor==c5_valor&&c5_valor==c9_valor&&c9_valor!=null){msg("You Win!!!");vitoria = true;return;}
    if(c3_valor==c5_valor&&c5_valor==c7_valor&&c7_valor!=null){msg("You Win!!!");vitoria = true;return;}
}