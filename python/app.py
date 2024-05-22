from flask import Flask, request
from flask_cors import CORS, cross_origin
import pickle
import pandas as pd
from pymongo import MongoClient
import os

K = 9
app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# Load the model from disk
with open('nearest_neighbors.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
@cross_origin()
def predict():
    # Get the request data
    data = request.get_json(force=True)

    # mongo = MongoClient(os.environ['MONGO_DB_URL'])
    # db = mongo[os.environ['MONGO_DB']]
    # collection = db['MONGO_DB_COLLECTION'].find()
    # df = pd.DataFrame(list(collection))
    df = pd.read_csv("../rubber_ducks.csv") # TODO: get from mongo

     # Ensure the data is a list (even if it's just one dictionary)
    if isinstance(data, dict):
        data = [data]
    data = pd.DataFrame(data)
    data = data[['color', 'size', 'material', 'animal', 'pattern', 'theme', 'durability', 'popularity', 'price']]

    # Do encoding first and then apply model
    data_encoded = model[0:-1].transform(data)
    predictions = model[-1].kneighbors(X=data_encoded, n_neighbors=K)
    indices = predictions[1][0] # get indices of all similar ducks

    ducks = df.iloc[indices]

    # Return the prediction
    return ducks.to_json(orient='records')

if __name__ == '__main__':
    app.run(port=5000) # TODO: change to appropriate port