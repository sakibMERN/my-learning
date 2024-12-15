//conceptual-crud
//KV7lDoeXAJwMygOr

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

const port = process.env.PORT || 5000;


//database connection
const uri = "mongodb+srv://conceptual-crud:KV7lDoeXAJwMygOr@cluster0.knrd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// middleware
app.use(cors());
app.use(express.json());

//custom middleware
const logger = (req, res, next) => {
    console.log("ekhon kicu ekta hobe ");
}



app.get("/", (req, res)=> {
    res.send('This is my first route.')
});

//main operation
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      app.post('/add-data', (req, res)=> {
        const data = req.body;
        console.log(data);
        res.send(data);
      })

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);


app.listen(port, ()=> {
    console.log(`The server in running on port: ${port}`);
})
