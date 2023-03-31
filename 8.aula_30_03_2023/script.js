const NOME = 'Tiago';
const IDADE = 78;

function boasVindas(){
    document.write('<h1>Ola pessoal</h1>');
}

function boasVindasComNome(nome){
    document.write(`<h1>Olá meu nome é ${nome}</h1>`);
}

function boasVindasComNome2(nome='Estranho'){
    document.write(`<h1>Olá meu nome é ${nome}</h1>`);
}

function boasVindasComNome3(nome='Estranho',idade='0,1'){
    document.write(`<h1>Olá meu nome é ${nome} e minha idade é ${idade} anos.</h1>`);
}

function hoje(){
    return new Date();
}

function dobrarValor(valor){
    return `<h1>O dobro de ${valor} é ${valor*2}.</h1>`;
}

boasVindas();
boasVindasComNome(NOME);
boasVindasComNome2();
boasVindasComNome3(NOME,IDADE);
boasVindasComNome(`${NOME} hoje é ${hoje()}`);

document.write(dobrarValor(2));
document.write(dobrarValor(5));
document.write(dobrarValor(10));
