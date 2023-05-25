let opcao = 'Celsius';
let cores = {'verde':'bg-success-subtle','cinza':'bg-warning-subtle','vermelho':'bg-danger-subtle'}

let FtoC=(f,c)=>{
    f.value = (1.8*c.value+32).toFixed(1)
    changeColor(c.value)
}

let CtoF=(c,f)=>{
    c.value= ((f.value-32)/1.8).toFixed(1)
    changeColor(c.value)
}

let changeColor = temp=>{
    campo1.classList.value = 'form-control'
    campo2.classList.value = 'form-control'
    if (temp < 26){
        campo1.classList.add(cores['verde'])
        campo2.classList.add(cores['verde'])
    }else if (temp>=26 && temp < 31){
        campo1.classList.add(cores['cinza'])
        campo2.classList.add(cores['cinza'])
    }else{
        campo1.classList.add(cores['vermelho'])
        campo2.classList.add(cores['vermelho'])
    }
}


let changeMeasurement = () => {
    opcao = op.options[op.selectedIndex].innerHTML;
    lfare.innerHTML = opcao == 'Celsius'? 'Fahrenheit': 'Celsius'
    campo1.value = campo2.value = '';
}

let update = e => {
    if (opcao == 'Celsius'){
        if (e.target.id == 'campo1'){
            FtoC(campo2,campo1);
        }else if (e.target.id == 'campo2'){
            CtoF(campo1,campo2);
        }
    }else{
        if (e.target.id == 'campo2'){
            FtoC(campo1,campo2)
        }else{
            CtoF(campo2,campo1)
        }
    }
}

changeColor(0)