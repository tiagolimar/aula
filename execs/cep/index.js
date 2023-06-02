// via cep
// https://viacep.com.br/ws/01001000/json/

// UFs
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// Municípios por UF
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios



let consultar_cep = ()=>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
    })
}

let consultar_estados = ()=>{
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response=>response.json())
    .then(json=>{
        json.forEach(element => {
            estados.innerHTML += `<option value=${element.sigla}>${element.nome}</option>`
        });
    })
}

let consultar_cidades = ()=>{
    console.log('foi');
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
        .then(response=>response.json())
        .then(json=>{
            json.forEach(element=>{
                cidades.innerHTML += `<option>${element.nome}</option>`
            })
        });
}

consultar_estados()