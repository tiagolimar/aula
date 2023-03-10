let lista = document.getElementById('lista');
let produtos = ["Uva","Banana","Manga","Cajá","Pinha","Pera","Tomate","Batata","Abacaxi","Tangerina"];

for(let qualquernomeai = 0;qualquernomeai < produtos.length;qualquernomeai++){
    lista.innerHTML +=`<li class="list-group-item" onclick="autodestroy()">${produtos[qualquernomeai]}</li>`;
}

function addfruit(){
    let produto = document.querySelector('#produto')
    lista.innerHTML=`<li class="list-group-item" onclick="autodestroy()">${produto.value}</li>`;
    produto.value = "";
}

function autodestroy(){
    event.target.offsetParent.remove();
}