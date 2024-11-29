// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 5000;


// app.use(cors());
// app.use(express.json());


// const users = [
//     {id: 1, name: 'Sabana', email: "sabana@gmail.com"},
//     {id: 2, name: 'Sabnoor', email: "sabnoor@gmail.com"},
//     {id: 3, name: 'Sabila', email: "sabila@gmail.com"},
// ]


// app.get('/', (req, res) => {
//     res.send('User management server is running.')
// });

// app.get('/user', (req, res) => {
//     res.send(users);
// })

// app.post('/user', (req, res) => {
//     console.log("Post api hitting");
//     console.log(req.body);
//     const newUser = req.body;
//     newUser.id = users.length + 1;
//     users.push(newUser);
//     res.send(newUser);
// })


// app.listen(port, ()=> {
//     console.log(`Server is running on port: ${port}`);
// })

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 


app.use(cors());
app.use(express.json());


const users = [
    {id: 1, name: 'Sabana', email: "sabana@gmail.com"},
    {id: 2, name: 'Sabnoor', email: "sabnoor@gmail.com"},
    {id: 3, name: 'Sabila', email: "sabila@gmail.com"},
]



app.get('/', (req, res) => {
    res.send('This is my new api')
})

app.get('/user', (req, res) => {
    res.send(users);
})

app.post('/user', (req, res) => {
    console.log('Post api hitting');
    // console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    console.log(newUser);
    users.push(newUser);


})

app.listen(port, ()=> {
    console.log(`This application is running on port ${port}`);
})