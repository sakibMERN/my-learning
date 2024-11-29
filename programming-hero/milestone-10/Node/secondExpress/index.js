const express = require('express');
// const phones = require('./newPhone.json');
const phones = require('./myPhone.json');
// const my = require('./my.json');
const cors = require('cors');
const app = express();
const prot = 3000;

//middleware
app.use(cors());




app.get('/', (req, res) => {
    res.send('Hello nodemon moon soon!!!');
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);

    console.log("I need data for", id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
});

app.listen(prot, ()=> {
    console.log(`my phone server is running on ${prot}`);
});