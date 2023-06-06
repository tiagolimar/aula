"use strict";

let consultar_cep = ()=>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response=>response.json())
    .then(json=>{
        ddd.value = json.ddd;
        bairro.value = json.bairro;
        logradouro.value = json.logradouro;
    }).catch(()=>{
        alert('Insira um CEP válido.')
        cep.value = ''
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
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
        .then(response=>response.json())
        .then(json=>{
            while(cidades.firstChild) cidades.removeChild(cidades.firstChild)
            cidades.innerHTML = '<option>Escolher...</option>'
            json.forEach(element=>{
                cidades.innerHTML += `<option>${element.nome}</option>`
            })
        });
}

consultar_estados()