const express = require('express')

const app = express()
app.use(express.json())

const students = [{name:'awet', language:'php'}, {name:'feruz', language: 'javascript'}];

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/students', (req, res)=> {
    res.send(students);
})

app.get('/students/:name', (req, res)=> {
    const name = req.params.name;
    const student = students.find(s => s.name === name)
    if (!student) res.status(404).send("student not found!")
    res.send(student);
})


app.post('/students', (req, res)=> {
    const student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student);
    res.send(students);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`listening to port number : ${port}`)
})


