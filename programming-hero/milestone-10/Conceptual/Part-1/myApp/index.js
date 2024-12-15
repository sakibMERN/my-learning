const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello Bangladesh! The server is working.")
});

app.get("/users", (req, res)=> {

    res.send([]);
});

app.post("/users", (req, res)=> {
    const user = req.body;
})


app.listen(5000, ()=> {
    console.log("The application is running on prot : 5000");
})