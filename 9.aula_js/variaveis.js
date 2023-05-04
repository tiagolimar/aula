let usuario = {
    nome: 'Juliano',
    idade: '102',
    telefone: 852345678
}

for (let propriedade of Object.entries(usuario)) {
    console.log(usuario[propriedade[0]])
}