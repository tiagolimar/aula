let num = 123

if (num){
    console.log('É um número diferente de zero');
}else{
    console.log('É um zero');
}

let eMaiorDoQueDez = (n)=> n>10? 'É maior do que dez' : n==10? 'É igual a dez': 'É menor do que dez';

let eMaiorDoQueDez = (n)=>{
    if (n>10) 'É maior do que 10';
    else if (n==10) 'É igual a 10';
    else 'É menor do que 10';
}
