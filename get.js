let clone = {};

const getData = () => {
    return fetch('db.json')
        .then(response => response.json())
        .then((data) => {
            for (let key in data) {
                clone[key] = data[key];
            }
        })
        .catch(error => {
            console.log('Ошибка: ' + error);
        })
}

const sendData = () => {
    setTimeout(() => {
        console.log(JSON.stringify(clone));
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(clone)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Ошибка: ' + error);
        })
    }, 2000);
}

getData();
sendData();