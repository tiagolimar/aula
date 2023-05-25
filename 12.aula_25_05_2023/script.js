fetch('https://jsonplaceholder.typicode.com/')
    .then(respone=>respone.json())
        .then(json=>console.log(json))

        