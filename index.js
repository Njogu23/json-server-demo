function getApi(){
    fetch('https://json-server-demo-kr50.onrender.com/user')
    .then(r => r.json())
    .then(d => console.log(d))
}

getApi()