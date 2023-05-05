//abaixo tem uma função que soma dois valores
function funcao_que_soma_dois_valores(){
    //abaixo tem uma variável que obtém o elemento html
    // do input responsável por coletar o número 01
    let input_do_valor_01 = document.getElementById('n1');
    
    //abaixo tem uma variável que obtém o elemento html
    // do input responsável por coletar o número 02
    let input_do_valor_02 = document.getElementById('n2');
    
    //abaixo tem uma variável que obtém o valor do
    //do 
    let valor_do_input_do_valor_01 = +input_do_valor_01.value;
    let valor_do_input_do_valor_02 = +input_do_valor_02.value;
    
    console.log(valor_do_input_do_valor_01 + valor_do_input_do_valor_02);
    let resultado = +n1.value + (+n2.value);
    alert(resultado);
}