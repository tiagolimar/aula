const saida = document.getElementById('resultado');

function Calcular(botao){
    event.preventDefault();
    let entradas = document.getElementsByTagName('input');

    valor1 = +entradas[0].value;
    valor2 = +entradas[1].value;

    let calculadora = {
        '+':function soma (x,y){return x+y},
        '-':function sub (x,y){return x-y},
        '/':function divi (x,y){return x/y},
        '*':function multi (x,y){return x*y}
    }
    
    let calculo = calculadora[botao.innerHTML];

    valor = calculo(valor1,valor2)

    if(valor === NaN || valor === Infinity || valor === undefined){valor = "erro"}
    
    saida.innerHTML = 'O resultado é = ' + valor;
    formulario = document.getElementsById.reset;
}

function Apagar(){
    saida.innerHTML = "O resultado é = ";
}