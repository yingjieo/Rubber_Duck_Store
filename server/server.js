import express from 'express';
// import {MongoClient, ObjectId} from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import pg from 'pg';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// const url = process.env.MONGO_URL;
// const dbName = process.env.MONGO_DB_NAME;
// const collectionName = process.env.MONGO_COLLECTION_NAME;

app.post('/ducks/search', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const query = req.body;
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
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