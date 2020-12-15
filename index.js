const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello World')
})


const student = [{name:'awet', language:'php'}, {name:'feruz', language: 'javascript'}];

app.get('/students', (req, res)=> {
    res.send(student);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`listening to port number : ${port}`)
})
