fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respone=>respone.json())
        .then(jason=>{
            jason.forEach(element => {
                if (element.userId == 10){
                    console.log(`${element.id} : ${element.title}`);
                }
            })
        })