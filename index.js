const express = require('express')

const app = express()
app.use(express.json())

const students = [{name:'awet', language:'php'}, {name:'feruz', language: 'javascript'}];

app.get('/', (req, res) =>{
    res.send('Hello World')
})

// get request all student
app.get('/students', (req, res)=> {
    res.send(students);
})

// get request for a specific student
app.get('/students/:name', (req, res)=> {
    const name = req.params.name;
    const student = students.find(s => s.name === name)
    if (!student) res.status(404).send("student not found!")
    res.send(student);
})

// post request || create or add
app.post('/students', (req, res)=> {
    const student = {
        language: req.body.language,
        name: req.body.name
    }
    students.push(student);
    res.send(students);
})

// put request || update
app.put('/students/:name', (req, res)=>{
    const student = students.find((s => s.name === req.params.name));
    student.language = req.body.language;
    res.send(student);
})

// delete request
app.delete('/students/:name', (req, res)=> {
    const student = students.find((s => s.name === req.params.name));
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(students);
})
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`listening to port number : ${port}`)
})


