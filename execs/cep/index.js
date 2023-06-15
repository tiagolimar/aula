// via cep
// https://viacep.com.br/ws/01001000/json/

// UFs
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// Municípios por UF
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

const consultar_cep = ()=>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response=>response.json())
    .then(json=>{
        logradouro.value = json['logradouro']
        complemento.value = json['complemento']
        bairro.value = json['bairro']
        numero.focus()
        estados.value = json['uf']
        consultar_cidades(json['localidade'])
    })
}

let consultar_estados = ()=>{
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response=>response.json())
    .then(json=>{
        estados.innerHTML =  '<option>Escolher...</option>'
        json.forEach(element => {
            estados.innerHTML += `<option value=${element.sigla}>${element.nome}</option>`
        });
        consultar_cidades();
    })
}

let consultar_cidades = (nome='')=>{
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
        .then(response=>response.json())
        .then(json=>{
            cidades.innerHTML = '<option>Escolher...</option>'
            json.forEach(element=>{
                cidades.innerHTML += `<option value="${element.nome}">${element.nome}</option>`
                if (nome) cidades.value = nome
            })
        });
}

consultar_estados()