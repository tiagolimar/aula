fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
        .then(json=>{
            json.filter(obj=>obj.id%2 == 0).forEach(element => {
                console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`);
            });
        })