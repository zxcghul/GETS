
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

const getData = () => {
    fetch('db.json')
        .then(result => {
            if (result.ok === true) {
                fetch('db.json')
                    .then(response => response.json())
                    .then(data => {
                        sendData(data);
                    })
                    .catch(error => {
                        console.log('Ошибка: ' + error);
                    })
            }
        })
        .catch(error => {
            console.log('Ошибка: ' + error);
    })
}

getData()