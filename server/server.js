import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
// import dotenv from 'dotenv';
import cors from 'cors';

process.loadEnvFile();

// dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const client = await MongoClient.connect(url);
const db = client.db(dbName);
const collection = db.collection(collectionName);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;



app.get('/ducks', async(req, res)=> {
    try{
        const ducks = await collection.find({}).toArray()
        res.json(ducks)
    } catch (err) {
        console.error("error", err)
        res.status(500).send("Something squeaks")
    }
})

app.get('/ducks/:id', async(req, res) => {
    try{
        const duck = await collection.find({'duck_id': +req.params.id}).toArray()
        res.json(duck[0])
    } catch (err) {
        console.error("error", err)
        res.status(500).send("Something squeaks")
    }
})

app.post('/ducks/search', async (req, res) => {
    try {
        const {searchTerm} = req.body;
        console.log("searchTerm:", searchTerm);
        const regex = new RegExp(searchTerm, 'i');

        if (!searchTerm) { // handle empty search term
            const result = await collection.find({}).toArray();
            res.json(result);
        }
        else {
            const result = await collection.find({"color" : regex}).toArray();
            res.json(result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
});

app.post('/ducks/login', async (req, res) => {
    try {
        // login logic
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
})


app.listen( PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})

process.on('SIGINT', () => {
    client.close();
    console.log('Exiting gracefully')
    process.exit(0);
  });