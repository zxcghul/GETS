
const sendData = (res) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(res)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Ошибка: ' + error);
        })
}

const getData = (func) => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            func(data);
        })
        .catch(error => {
        console.log('Ошибка: ' + error);
    })
}

getData(sendData)