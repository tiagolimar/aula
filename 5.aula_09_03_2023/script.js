data = new Date();
mes_atual = data.getMonth();

let dias = document.getElementById("day");
let meses = document.getElementById("mes");
let anos = document.getElementById("ano");

let todos_os_meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let num_dias_por_mes = [31,28,31,30,31,30,31,31,30,31,30,31];
let num_dias = num_dias_por_mes[mes_atual];

for (let i = 1; i < num_dias+1;i++){
    let opcao = document.createElement('option');
    opcao.innerHTML = i;
    dias.appendChild(opcao);
}

for (let i = 0; i < 12;i++){
    let opcao = document.createElement('option');
    opcao.innerHTML = todos_os_meses[i];
    meses.appendChild(opcao);
}

for (let i = 2023; i > 2023-100;i--){
    let opcao = document.createElement('option');
    opcao.innerHTML = i;
    anos.appendChild(opcao);
}
